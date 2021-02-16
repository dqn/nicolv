import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type PostWatchEnqueteRequest = {
  question: string;
  items: string[];
};

export type PostWatchEnqueteResponse = {
  meta: Meta;
};

export function postWatchEnquete(
  userSession: string,
  nicoliveProgramId: string,
  body: PostWatchEnqueteRequest,
): Promise<PostWatchEnqueteResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/enquete`;

  return request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}

export type DeleteWatchEnqueteResponse = {
  meta: Meta;
};

export function deleteWatchEnquete(
  userSession: string,
  nicoliveProgramId: string,
): Promise<DeleteWatchEnqueteResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/enquete`;

  return request(url, {
    method: "DELETE",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
