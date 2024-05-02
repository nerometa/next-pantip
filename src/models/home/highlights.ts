import type { HomeDataResponse } from './home';

export interface Highlight {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
}

export interface HighlightsResponse extends HomeDataResponse {
  data: Highlight[];
}
