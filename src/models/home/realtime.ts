import type { Topic } from './shared';

export interface RealtimeResponse {
  realtime: Realtime;
}

export interface Realtime {
  success: boolean;
  data: RealtimeTopic[];
  previous_id: null;
  next_id: number;
  ranking_time: number;
}

export interface RealtimeTopic extends Topic {
  ranking_time: Date;
  uid_ranking: number;
}
