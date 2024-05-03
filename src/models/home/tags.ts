import type { Tag, Topic } from './shared';

export interface TagsResponse {
  success: boolean;
  data: Tag[];
}

export type TagTopicResponse = {
  tag_id: number;
  tag_name: string;
  topic_count: number;
  follow_count: number;
  is_followed: boolean;
  slug: string;
  type: string;
  topics: TagTopic[];
};

export interface TagTopic extends Topic {
  category: string;
}

export interface PopularTagsResponse extends TagsResponse {
  ranking_time: number;
  next_id: number;
}

export function instanceOfTagTopic(obj: any): obj is TagTopicResponse {
  return 'tag_id' in obj;
}
