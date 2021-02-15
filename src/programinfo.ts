import type { Category, OptionalCategory } from "./category";
import { request, serializeCookie } from "./request";
import type { NicoliveApiResponse } from "./response";

export type Room = {
  webSocketUri: string;
  xmlSocketUri: string;
  name: string;
  id: number;
  threadId: string;
};

export type SocialGroup =
  | {
      type: "community";
      id: string;
      name: string;
      communityLevel: number;
      thumbnailUrl: string;
    }
  | {
      type: "channel";
      id: string;
      name: string;
      ownerName: string;
      thumbnailUrl: string;
    };

export type Broadcaster = {
  name: string;
  id: string;
};

export type StreamSetting = {
  maxQuality:
    | "6Mbps720p"
    | "2Mbps450p"
    | "1Mbps450p"
    | "384kbps288p"
    | "192kbps288p";
  orientation: "Landscape" | "Portrait";
};

export type TagItem = {
  text: string;
  locked: boolean;
  nicopediaArticleUrl?: string;
};

export type Tags = {
  items: TagItem[];
  ownerLocked: boolean;
};

export type Data = {
  title: string;
  description: string;
  isMemberOnly: boolean;
  vposBaseAt: number;
  beginAt: number;
  endAt: number;
  status: "test" | "onAir" | "end";
  categories: (Category | OptionalCategory)[];
  rooms: Room[];
  isUserNiconicoAdsEnabled: boolean;
  socialGroup: SocialGroup;
  broadcaster: Broadcaster;
  streamSetting: StreamSetting;
  tags: Tags;
};

export type GetPrograminfoResponse = NicoliveApiResponse<Data>;

export function getPrograminfo(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetPrograminfoResponse> {
  return request(`unama/watch/${nicoliveProgramId}/programinfo`, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
