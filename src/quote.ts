export type QuoteLayer = {
  volume: number;
  source: "self" | "quote";
};

export type QuoteSubLayer = {
  volume: number;
  source: "self" | "quote";
  isSoundOnly: boolean;
};

export type QuoteLayout = {
  main: QuoteLayer;
  sub: QuoteSubLayer;
};

export type QuoteContent = {
  id: string;
  type: "video" | "live";
};
