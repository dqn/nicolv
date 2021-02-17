import { request } from "./request";
import type { Meta } from "./meta";

export type GetBroadcastersProgramData = {
  nicoliveProgramId: string;
};

export type GetBroadcastersProgramResponse = {
  meta: Meta;
  data?: GetBroadcastersProgramData;
};

export function getUserProgram(
  uid: number | string,
): Promise<GetBroadcastersProgramResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v1/broadcasters/user/${uid}/program`;

  return request(url);
}

export function getSocialGroupProgram(
  sid: string,
): Promise<GetBroadcastersProgramResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v1/broadcasters/social_group/${sid}/program`;

  return request(url);
}
