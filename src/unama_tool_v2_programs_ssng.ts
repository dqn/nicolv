import { request } from "./request";
import type { Meta } from "./meta";

export type GetUnamaToolV2ProgramsSsngDatum = {
  id: number;
  type: "word" | "user" | "command";
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
