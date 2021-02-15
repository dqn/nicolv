import { request } from "./request";
import type { NicoliveApiResponse } from "./response";

export type GetToolBroadcastersLatestProgramData = {
  nicoliveProgramId: string;
};

export type GetToolBroadcastersLatestProgramResponse = NicoliveApiResponse<GetToolBroadcastersLatestProgramData>;

export function getToolBroadcastersLatestProgramUser(
  uid: number | string,
): Promise<GetToolBroadcastersLatestProgramResponse> {
  return request(`unama/tool/v1/broadcasters/user/${uid}/program`);
}

export function getToolBroadcastersLatestProgramSocialGroup(
  sid: string,
): Promise<GetToolBroadcastersLatestProgramResponse> {
  return request(`unama/tool/v1/broadcasters/social_group/${sid}/program`);
}
