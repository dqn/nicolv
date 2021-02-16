import { request } from "./request";
import type { Meta } from "./meta";
import type { Quality } from "./quality";
import type { Category, OptionalCategory } from "./category";

export type RightsItem = {
  code: string;
  title: string;
  artist: string;
  lyric: string;
  composer: string;
  time: string;
  org: string;
};

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
  rightsItems: RightsItem[];
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

export type PostUnamaApiV2ProgramsRequest = {
  title: string;
  description: string;
  category: Category;
  optionalCategories?: OptionalCategory[];
  tags?: Tag[];
  isTagOwnerLock?: boolean;
  communityId: string;
  reservationBeginTime?: string;
  durationMinutes?: number;
  isMemberOnly?: boolean;
  isTimeshiftEnabled?: boolean;
  isUadEnabled?: boolean;
  isIchibaEnabled?: boolean;
  isOfficialIchibaOnly?: boolean;
  maxQuality?: Quality;
  rightsItems?: Partial<RightsItem>[];
  isQuotable?: boolean;
  isAutoCommentFilterEnabled?: boolean;
  konomiTagIds?: number[];
};

export type PostUnamaApiV2ProgramsData = {
  id: string;
};

export type PostUnamaApiV2ProgramsResponse = {
  meta: Meta;
  data?: PostUnamaApiV2ProgramsData;
};

export function postUnamaApiV2Programs(
  userSession: string,
  body: PostUnamaApiV2ProgramsRequest,
): Promise<PostUnamaApiV2ProgramsResponse> {
  const url = "https://live2.nicovideo.jp/unama/api/v2/programs";

  return request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-niconico-session": userSession,
    },
    body: JSON.stringify(body),
  });
}
