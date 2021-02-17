import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type PostEnqueteResultItem = {
  name: string;
  rate: number;
};

export type PostEnqueteResultData = {
  title: string;
  items: PostEnqueteResultItem[];
};

export type PostEnqueteResultResponse = {
  meta: Meta;
  data?: PostEnqueteResultData;
};

export function postEnqueteResult(
  userSession: string,
  nicoliveProgramId: string,
): Promise<PostEnqueteResultResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/enquete/result`;

  return request(url, {
    method: "POST",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
