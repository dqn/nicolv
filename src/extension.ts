import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";

export type Method = {
  type: "free";
  minutes: number;
};

export type GetExtensionData = {
  methods: Method[];
};

export type GetExtensionResponse = {
  meta: Meta;
  data: GetExtensionData;
};

export function getExtension(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetExtensionResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/extension`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}

export type PostExtensionRequest = {
  minutes: 30 | 60 | 90 | 120 | 150 | 180 | 210 | 240 | 270 | 300 | 330;
};

export type PostExtensionData = {
  end_time: number;
};

export type PostExtensionResponse = {
  meta: Meta;
  data: PostExtensionData;
};

export function postExtension(
  userSession: string,
  nicoliveProgramId: string,
  body: PostExtensionRequest,
): Promise<PostExtensionResponse> {
  const url = `https://live2.nicovideo.jp/watch/${nicoliveProgramId}/extension`;

  return request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
    body: JSON.stringify(body),
  });
}
