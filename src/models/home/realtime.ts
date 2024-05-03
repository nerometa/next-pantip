import type { Tag } from './tags';

export interface RealtimeResponse {
  realtime: Realtime;
}

export interface Realtime {
  success: boolean;
  data: Topic[];
  previous_id: null;
  next_id: number;
  ranking_time: number;
}

export interface Topic {
  topic_id: number;
  title: string;
  topic_type: number;
  created_time: Date;
  thumbnail_url?: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: Author;
  tags: Tag[];
  ranking_time: Date;
  uid_ranking: number;
}

export interface Author {
  id: number;
  name: string;
  avatar: Avatar;
  slug: string;
}

export interface Avatar {
  original?: string;
  large: string;
  medium: string;
  small: string;
}
