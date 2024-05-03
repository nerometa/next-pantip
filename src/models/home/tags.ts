export interface TagsResponse {
  success: boolean;
  data: Tag[];
}

export interface PopularTagsResponse extends TagsResponse {
  ranking_time: number;
  next_id: number;
}

export interface Tag {
  name: string;
  slug: string;
  pageview: number;
  topic_count: number;
  follow_count: number;
}
