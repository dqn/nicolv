import { request, serializeCookie } from "./request";
import type { NicoliveApiResponse } from "./response";

export type Method = {
  type: "free";
  minutes: number;
};

export type GetExtensionData = {
  methods: Method[];
};

export type GetExtensionResponse = NicoliveApiResponse<GetExtensionData>;

export function getExtension(
  userSession: string,
  nicoliveProgramId: string,
): Promise<GetExtensionResponse> {
  return request(`/watch/${nicoliveProgramId}/extension`, {
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

export type PostExtensionResponse = NicoliveApiResponse<PostExtensionData>;

export function postExtension(
  userSession: string,
  nicoliveProgramId: string,
  body: PostExtensionRequest,
): Promise<PostExtensionResponse> {
  return request(`/watch/${nicoliveProgramId}/extension`, {
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
