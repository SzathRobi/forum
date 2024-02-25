import { Author } from './author.interface';

export interface Topic {
  id: number;
  author: Author;
  title: string;
  body: string;
  comments: Comment[];
}
