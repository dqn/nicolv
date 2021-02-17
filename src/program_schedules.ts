import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type GetProgramSchedulesDatum = {
  nicoliveProgramId: string;
  testBeginAt: number;
  onAirBeginAt: number;
  onAirEndAt: number;
  socialGroupId: string;
  status: "reserved" | "test" | "onAir" | "end";
};

export type GetProgramSchedulesData = GetProgramSchedulesDatum[];

export type GetProgramSchedulesResponse = {
  meta: Meta;
  data?: GetProgramSchedulesData;
};

export function getProgramSchedules(
  userSession: string,
): Promise<GetProgramSchedulesResponse> {
  const url = "https://live2.nicovideo.jp/unama/tool/v1/program_schedules";

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
