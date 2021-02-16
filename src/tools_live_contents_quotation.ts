import { request } from "./request";
import { serializeCookie } from "./cookie";
import type { Meta } from "./meta";
import type { QuoteContent, QuoteLayout } from "./quatation";

export type GetToolsLiveContentsQuotationResponse = {
  meta: Meta;
  layout?: QuoteLayout;
  currentContent?: QuoteContent;
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

export type PostToolsLiveContentsQuotationRequest = {
  layout: QuoteLayout;
  contents: QuoteContent[];
};

export type PostToolsLiveContentsQuotationResponse = {
  meta: Meta;
};

export function postToolsLiveContentsQuotation(
  userSession: string,
  contentId: string,
  body: PostToolsLiveContentsQuotationRequest,
): Promise<PostToolsLiveContentsQuotationResponse> {
  const url = `https://lapi.spi.nicovideo.jp/v1/tools/live/contents/${contentId}/quotation`;

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
