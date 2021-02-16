import { request } from "./request";
import type { Meta } from "./meta";

export type GetUnamaToolV2OnairUserData = {
  programId?: string;
  nextProgramId?: string;
};

export type GetUnamaToolV2OnairUserResponse = {
  meta: Meta;
  data?: GetUnamaToolV2OnairUserData;
};

export function getUnamaToolV2OnairUser(
  userSession: string,
): Promise<GetUnamaToolV2OnairUserResponse> {
  const url = "https://live2.nicovideo.jp/unama/tool/v2/onairs/user";

  return request(url, {
    headers: {
      "X-niconico-session": userSession,
    },
  });
}
