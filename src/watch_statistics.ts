import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type GetWatchStatisticsData = {
  watchCount: number;
  commentCount: number;
};

export type GetWatchStatisticsResponse = {
  meta: Meta;
  data?: GetWatchStatisticsData;
};

export function getWatchStatistics(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetWatchStatisticsResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/statistics`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
