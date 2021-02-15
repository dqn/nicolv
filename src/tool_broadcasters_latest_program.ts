import { request } from "./request";
import type { Meta } from "./meta";

export type GetToolBroadcastersLatestProgramData = {
  nicoliveProgramId: string;
};

export type GetToolBroadcastersLatestProgramResponse = {
  meta: Meta;
  data: GetToolBroadcastersLatestProgramData;
};

export function getToolBroadcastersLatestProgramUser(
  uid: number | string,
): Promise<GetToolBroadcastersLatestProgramResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v1/broadcasters/user/${uid}/program`;

  return request(url);
}

export function getToolBroadcastersLatestProgramSocialGroup(
  sid: string,
): Promise<GetToolBroadcastersLatestProgramResponse> {
  const url = `https://live2.nicovideo.jp/unama/tool/v1/broadcasters/social_group/${sid}/program`;

  return request(url);
}
