import { request } from "./request";
import type { Meta } from "./meta";

export type GetOnairsData = {
  programId?: string;
  nextProgramId?: string;
};

export type GetOnairsResponse = {
  meta: Meta;
  data?: GetOnairsData;
};

export function getOnairs(userSession: string): Promise<GetOnairsResponse> {
  const url = "https://live2.nicovideo.jp/unama/tool/v2/onairs/user";

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}
