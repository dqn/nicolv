import { request } from "./request";
import type { Meta } from "./meta";
import type { Quality } from "./quality";
import type { Category, OptionalCategory } from "./category";

export type Community = {
  id: string;
  name: string;
  level: number;
};

export type Tag = {
  label: string;
  isLocked: boolean;
  isReserved: boolean;
};

export type OnAirSchedule = {
  beginTime: string;
  endTime: string;
};

export type TestSchedule = {
  beginTime: string;
  endTime: string;
};

export type KonomiTag = {
  text: string;
  nicopediaId: number;
  nicopediaUrl: string;
};

export type GetUnamaApiV2ProgramsData = {
  isUpdatable: boolean;
  isQuotable: boolean;
  isTagOwnerLock: boolean;
  isReserved: boolean;
  isMemberOnly: boolean;
  description: string;
  isOfficialIchibaOnly: boolean;
  title: string;
  rightsItems: unknown[]; // ?
  community: Community;
  editableFields: string[];
  tags: Tag[];
  isAutoCommentFilterEnabled: boolean;
  onAirSchedule: OnAirSchedule;
  maxQuality: Quality;
  testSchedule: TestSchedule;
  isUadEnabled: boolean;
  optionalCategories: OptionalCategory[];
  konomiTags: KonomiTag[];
  isIchibaEnabled: boolean;
  id: string;
  category: Category;
  isTimeshiftEnabled: boolean;
};

export type GetUnamaApiV2ProgramsResponse = {
  meta: Meta;
  data?: GetUnamaApiV2ProgramsData;
};

export function getUnamaApiV2Programs(
  userSession: string,
  nicoliveProgramId?: string,
): Promise<GetUnamaApiV2ProgramsResponse> {
  const url = `https://live2.nicovideo.jp/unama/api/v2/programs/${
    nicoliveProgramId ?? "latest"
  }`;

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}
