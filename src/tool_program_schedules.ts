import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type GetToolProgramSchedulesDatum = {
  nicoliveProgramId: string;
  testBeginAt: number;
  onAirBeginAt: number;
  onAirEndAt: number;
  socialGroupId: string;
  status: "reserved" | "test" | "onAir" | "end";
};

export type GetToolProgramSchedulesData = GetToolProgramSchedulesDatum[];

export type GetToolProgramSchedulesResponse = {
  meta: Meta;
  data?: GetToolProgramSchedulesData;
};

export function getToolProgramSchedules(
  userSession: string,
): Promise<GetToolProgramSchedulesResponse> {
  const url = "https://live2.nicovideo.jp/unama/tool/v1/program_schedules";

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
