import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type Permission = "OPERATOR_COMMENT" | "BSP_COMMENT";

export type GetUserCommentPermissionData = {
  permissions: Permission[];
};

export type GetUserCommentPermissionResponse = {
  meta: Meta;
  data?: GetUserCommentPermissionData;
};

export function getUserCommentPermission(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetUserCommentPermissionResponse> {
  const url = `https://live2.nicovideo.jp/unama/watch/${nicoliveProgramId}/user_comment_permission`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
