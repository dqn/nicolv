import { request } from "./request";
import type { Meta } from "./meta";

export type NgType = "word" | "user" | "command";

export type GetUnamaToolV2ProgramsSsngDatum = {
  id: number;
  type: NgType;
  body: string;
};

export type GetUnamaToolV2ProgramsSsngData = GetUnamaToolV2ProgramsSsngDatum[];

export type GetUnamaToolV2ProgramsSsngResponse = {
  meta: Meta;
  data?: GetUnamaToolV2ProgramsSsngData;
};

export function getUnamaToolV2ProgramsSsng(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetUnamaToolV2ProgramsSsngResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v2/programs/${nicoliveProgramId}/ssng`;

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}

export type PostUnamaToolV2ProgramsSsngRequest = {
  type: NgType;
  body: string;
}[];

export type PostUnamaToolV2ProgramsSsngDatum = {
  id: number;
  type: NgType;
  body: string;
};

export type PostUnamaToolV2ProgramsSsngData = PostUnamaToolV2ProgramsSsngDatum[];

export type PostUnamaToolV2ProgramsSsngResponse = {
  meta: Meta;
  data: PostUnamaToolV2ProgramsSsngData;
};

export function postUnamaToolV2ProgramsSsng(
  userSession: string,
  nicoliveProgramId: string,
  body: PostUnamaToolV2ProgramsSsngRequest,
): Promise<PostUnamaToolV2ProgramsSsngResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v2/programs/${nicoliveProgramId}/ssng`;

  return request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-niconico-session": userSession,
    },
    body: JSON.stringify(body),
  });
}
