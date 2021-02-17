import { request } from "./request";
import type { Meta } from "./meta";

export type NgType = "word" | "user" | "command";

export type GetProgramsSsngDatum = {
  id: number;
  type: NgType;
  body: string;
};

export type GetProgramsSsngData = GetProgramsSsngDatum[];

export type GetProgramsSsngResponse = {
  meta: Meta;
  data?: GetProgramsSsngData;
};

export function getProgramsSsng(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetProgramsSsngResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v2/programs/${nicoliveProgramId}/ssng`;

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}

export type PostProgramsSsngRequest = {
  type: NgType;
  body: string;
}[];

export type PostProgramsSsngDatum = {
  id: number;
  type: NgType;
  body: string;
};

export type PostProgramsSsngData = PostProgramsSsngDatum[];

export type PostProgramsSsngResponse = {
  meta: Meta;
  data?: PostProgramsSsngData;
};

export function postProgramsSsng(
  userSession: string,
  nicoliveProgramId: string,
  body: PostProgramsSsngRequest,
): Promise<PostProgramsSsngResponse> {
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

export type DeleteProgramsSsngRequest = { id: number[] };

export type DeleteProgramsSsngResponse = {
  meta: Meta;
};

export function deleteProgramsSsng(
  userSession: string,
  nicoliveProgramId: string,
  body: DeleteProgramsSsngRequest,
): Promise<DeleteProgramsSsngResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v2/programs/${nicoliveProgramId}/ssng`;

  return request(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "X-niconico-session": userSession,
    },
    body: JSON.stringify(body),
  });
}
