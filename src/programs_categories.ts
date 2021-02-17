import { request } from "./request";
import type { Meta } from "./meta";

export type GetProgramsCategoriesData = {
  categories: string[];
  optionalCategories: string[];
};

export type GetProgramsCategoriesResponse = {
  meta: Meta;
  data?: GetProgramsCategoriesData;
};

export function getProgramsCategories(): Promise<GetProgramsCategoriesResponse> {
  const url = "https://live2.nicovideo.jp/unama/api/v2/programs/categories";

  return request(url);
}
