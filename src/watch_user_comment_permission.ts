import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type Permission = "OPERATOR_COMMENT" | "BSP_COMMENT";

export type GetWatchUserCommentPermissionData = {
  permissions: Permission[];
};

export type GetWatchUserCommentPermissionResponse = {
  meta: Meta;
  data?: GetWatchUserCommentPermissionData;
};

export function getWatchUserCommentPermission(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetWatchUserCommentPermissionResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/user_comment_permission`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
