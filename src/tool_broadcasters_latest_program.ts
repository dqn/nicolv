import { request } from "./request";
import type { NicoliveApiResponse } from "./response";

export type GetToolBroadcastersLatestProgramUserData = {
  nicoliveProgramId: string;
};

export type GetToolBroadcastersLatestProgramUserResponse = NicoliveApiResponse<GetToolBroadcastersLatestProgramUserData>;

export function getToolBroadcastersLatestProgramUser(
  uid: number | string,
): Promise<GetToolBroadcastersLatestProgramUserResponse> {
  return request(`unama/tool/v1/broadcasters/user/${uid}/program`);
}
