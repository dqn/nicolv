import { request } from "./request";

export type GetUserNicknameData = {
  id: string;
  nickname: string;
};

export type GetUserNicknameError = {
  code: number;
  message?: string;
};

export type GetUserNicknameResponse = {
  data?: GetUserNicknameData;
  error?: GetUserNicknameError;
};

export function getUserNickname(
  userId: number | string,
): Promise<GetUserNicknameResponse> {
  const url = new URL("https://api.live2.nicovideo.jp/api/v1/user/nickname");
  url.search = new URLSearchParams({ userId: userId.toString() }).toString();

  return request(url);
}
