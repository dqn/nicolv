import { request } from "./request";
import type { Meta } from "./meta";

export type GetUnamaApiV2BroadcastableDatum = {
  id: string;
  name: string;
  isPenalized: boolean;
  ownerUserId: number;
  thumbnailUrl: string;
  smallThumbnailUrl: string;
  level: number;
};

export type GetUnamaApiV2BroadcastableData = GetUnamaApiV2BroadcastableDatum[];

export type GetUnamaApiV2BroadcastableResponse = {
  meta: Meta;
  data?: GetUnamaApiV2BroadcastableData;
  errors?: {
    expiryTime: string;
  };
};

export function getUnamaApiV2Broadcastable(
  userSession: string,
  communityId?: string,
): Promise<GetUnamaApiV2BroadcastableResponse> {
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
