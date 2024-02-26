import { Topic } from './topic.interface';

export interface PostTopicResponse {
  data: Topic;
  message: string;
  status: number;
}
