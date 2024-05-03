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

export interface Tag {
  name: string;
  slug: string;
  pageview: number;
  topic_count: number;
  follow_count: number;
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
}
