import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type PostWatchEnquete2Item = {
  name: string;
  rate: number;
};

export type PostWatchEnquete2Data = {
  title: string;
  items: PostWatchEnquete2Item[];
};

export type PostWatchEnquete2Response = {
  meta: Meta;
  data: PostWatchEnquete2Data;
};

export function postWatchEnquete2(
  userSession: string,
  nicoliveProgramId: string,
): Promise<PostWatchEnquete2Response> {
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
