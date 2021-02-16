import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type PutOperatorCommentRequest = {
  text: string;
  userName?: string;
  color?:
    | `white${"" | "2"}`
    | `red${"" | "2"}`
    | `pink${"" | "2"}`
    | `orange${"" | "2"}`
    | `yellow${"" | "2"}`
    | `green${"" | "2"}`
    | `cyan${"" | "2"}`
    | `blue${"" | "2"}`
    | `purple${"" | "2"}`
    | `black${"" | "2"}`;
  isPermanent?: boolean;
  link?: string;
};

export type PutOperatorCommentResponse = {
  meta: Meta;
};

export function putOperatorComment(
  userSession: string,
  nicoliveProgramId: string,
  body: PutOperatorCommentRequest,
): Promise<PutOperatorCommentResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/operator_comment`;

  return request(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}

export type DeleteOperatorCommentResponse = {
  meta: Meta;
};

export function deleteOperatorComment(
  userSession: string,
  nicoliveProgramId: string,
): Promise<DeleteOperatorCommentResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/operator_comment`;

  return request(url, {
    method: "DELETE",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
