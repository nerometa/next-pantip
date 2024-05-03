import type { HomeDataResponse } from './home';
import type { RoomTopicResponse } from './rooms';
import type { TagTopicResponse } from './tags';

export interface SuggestedTopicResponse extends HomeDataResponse {
  data: Array<RoomTopicResponse | TagTopicResponse>;
}
