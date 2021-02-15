import { request, serializeCookie } from "./request";
import type { NicoliveApiResponse } from "./response";

export type PutSegmentRequest = {
  state: "on_air" | "end";
};

export type PutSegmentData = {
  end_time: number;
  start_time: number;
};

export type PutSegmentResponse = NicoliveApiResponse<PutSegmentData>;

export function putSegment(
  userSession: string,
  nicoliveProgramId: string,
  body: PutSegmentRequest,
): Promise<PutSegmentResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/segment`;

  return request(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}
