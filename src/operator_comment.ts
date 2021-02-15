import { request, serializeCookie } from "./request";
import type { NicoliveApiResponse } from "./response";

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

export type PutOperatorCommentData = undefined;

export type PutOperatorCommentResponse = NicoliveApiResponse<PutOperatorCommentData>;

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

export type DeleteOperatorCommentData = undefined;

export type DeleteOperatorCommentResponse = NicoliveApiResponse<DeleteOperatorCommentData>;

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
