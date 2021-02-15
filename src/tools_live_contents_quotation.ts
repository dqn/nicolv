import { request, serializeCookie } from "./request";
import type { Meta } from "./meta";

export type Main = {
  volume: number;
  source: "self" | "quote";
};

export type Sub = {
  volume: number;
  source: "self" | "quote";
  isSoundOnly: boolean;
};

export type Layout = {
  main: Main;
  sub: Sub;
};

export type CurrentContent = {
  id: string;
  type: "video" | "live";
};

export type GetToolsLiveContentsQuotationResponse = {
  meta: Meta;
  layout: Layout;
  currentContent: CurrentContent;
};

export function getToolsLiveContentsQuotation(
  userSession: string,
  contentId: string,
): Promise<GetToolsLiveContentsQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

  return request(url, {
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}

export type DeleteToolsLiveContentsQuotationResponse = {
  meta: Meta;
};

export function deleteToolsLiveContentsQuotation(
  userSession: string,
  contentId: string,
): Promise<DeleteToolsLiveContentsQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

  return request(url, {
    method: "DELETE",
    headers: {
      cookie: serializeCookie({
        user_session: userSession,
      }),
    },
  });
}
