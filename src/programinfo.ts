import type { Category, OptionalCategory } from "./category";
import { request, serializeCookie } from "./request";
import type { Meta } from "./meta";
import type { Quality } from "./quality";

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
  maxQuality: Quality;
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

export type GetPrograminfoData = {
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

export type GetPrograminfoResponse = {
  meta: Meta;
  data: GetPrograminfoData;
};

export function getPrograminfo(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetPrograminfoResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/programinfo`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
