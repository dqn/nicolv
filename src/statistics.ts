import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type GetStatisticsData = {
  watchCount: number;
  commentCount: number;
};

export type GetStatisticsResponse = {
  meta: Meta;
  data?: GetStatisticsData;
};

export function getStatistics(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetStatisticsResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/statistics`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
