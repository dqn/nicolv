import { request } from "./request";
import type { Meta } from "./meta";
import type { Quality } from "./quality";

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

export type GetProgramsData = {
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
  optionalCategories: string[];
  konomiTags: KonomiTag[];
  isIchibaEnabled: boolean;
  id: string;
  category: string;
  isTimeshiftEnabled: boolean;
};

export type GetProgramsResponse = {
  meta: Meta;
  data?: GetProgramsData;
};

export function getPrograms(
  userSession: string,
  nicoliveProgramId?: string,
): Promise<GetProgramsResponse> {
  const url = `https://live2.nicovideo.jp/unama/api/v2/programs/${
    nicoliveProgramId ?? "latest"
  }`;

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}

export type PostProgramsRequest = {
  title: string;
  description: string;
  category: string;
  optionalCategories?: string[];
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

export type PostProgramsData = {
  id: string;
};

export type PostProgramsResponse = {
  meta: Meta;
  data?: PostProgramsData;
};

export function postPrograms(
  userSession: string,
  body: PostProgramsRequest,
): Promise<PostProgramsResponse> {
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

export type PatchProgramsRequest = Partial<PostProgramsRequest>;

export type PatchProgramsResponse = {
  meta: Meta;
};

export function patchPrograms(
  userSession: string,
  nicoliveProgramId: string,
  body: PatchProgramsRequest,
): Promise<PatchProgramsResponse> {
  const url = `https://live2.nicovideo.jp/unama/api/v2/programs/${nicoliveProgramId}`;

  return request(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "X-niconico-session": userSession,
    },
    body: JSON.stringify(body),
  });
}
