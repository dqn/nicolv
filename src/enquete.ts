import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type PostEnqueteRequest = {
  question: string;
  items: string[];
};

export type PostEnqueteResponse = {
  meta: Meta;
};

export function postEnquete(
  userSession: string,
  nicoliveProgramId: string,
  body: PostEnqueteRequest,
): Promise<PostEnqueteResponse> {
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

export type DeleteEnqueteResponse = {
  meta: Meta;
};

export function deleteEnquete(
  userSession: string,
  nicoliveProgramId: string,
): Promise<DeleteEnqueteResponse> {
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
