import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type GetVideoContentsData = {
  id: string;
  length: number;
  title: string;
  userId: string;
  quotable: boolean;
};

export type GetVideoContentsResponse = {
  meta: Meta;
  data?: GetVideoContentsData;
};

export function getVideoContents(
  userSession: string,
  contentId: string,
): Promise<GetVideoContentsResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/quote/services/video/contents/${contentId}`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
