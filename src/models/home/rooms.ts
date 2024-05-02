import type { HomeDataResponse } from './home';

export interface Room {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
}

export interface RoomsResponse extends HomeDataResponse {
  data: Room[];
}
