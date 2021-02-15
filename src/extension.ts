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
