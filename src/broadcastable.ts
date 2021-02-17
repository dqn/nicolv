import { request } from "./request";
import type { Meta } from "./meta";

export type GetBroadcastableDatum = {
  id: string;
  name: string;
  isPenalized: boolean;
  ownerUserId: number;
  thumbnailUrl: string;
  smallThumbnailUrl: string;
  level: number;
};

export type GetBroadcastableData = GetBroadcastableDatum[];

export type GetBroadcastableResponse = {
  meta: Meta;
  data?: GetBroadcastableData;
  errors?: {
    expiryTime: string;
  };
};

export function getBroadcastable(
  userSession: string,
  communityId?: string,
): Promise<GetBroadcastableResponse> {
  const url = new URL("https://live2.nicovideo.jp/unama/api/v2/broadcastable");

  if (communityId !== void 0) {
    url.search = new URLSearchParams({ communityId }).toString();
  }

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}
