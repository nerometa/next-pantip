import type { HomeDataResponse } from './home';
import type { Topic } from './shared';

export interface Room {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
}

export type RoomTopicResponse = {
  room_id: number;
  room_name_th: string;
  room_name_en: string;
  type: string;
  topics: RoomTopic[];
};

export interface RoomTopic extends Topic {
  category: Category;
}

export enum Category {
  Latest = 'latest',
  Trend = 'trend',
  Voted = 'voted',
}

export interface RoomsResponse extends HomeDataResponse {
  data: Room[];
}

export function instanceOfRoomTopic(obj: any): obj is RoomTopicResponse {
  return 'room_id' in obj;
}
