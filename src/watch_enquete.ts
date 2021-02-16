import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type DeleteWatchEnqueteResponse = {
  meta: Meta;
};

export function deleteWatchEnquete(
  userSession: string,
  nicoliveProgramId: string,
): Promise<DeleteWatchEnqueteResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/enquete`;

  return request(url, {
    method: "DELETE",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
