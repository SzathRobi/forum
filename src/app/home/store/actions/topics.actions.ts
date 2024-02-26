import { createAction, props } from '@ngrx/store';

import { tag } from 'app/home/constants/store.constants';
import { Author } from 'app/home/interfaces/author.interface';
import { Comment } from 'app/home/interfaces/comment.interface';
import { Topic } from 'app/home/interfaces/topic.interface';

export interface FetchTopicsSuccess {
  topics: Topic[];
}

export interface AddTopic {
  author: Author;
  body: string;
  title: string;
}

export interface AddTopicSuccess {
  topic: Topic;
}

export interface AddCommentToTopic {
  comment: Omit<Comment, 'id'>;
  topicId: number;
}

export interface AddCommentToComment {
  comment: Omit<Comment, 'id'>;
  topicId: number;
  commentId: number;
}

export const fetchTopics = createAction(`${tag} fetch topics`);

export const fetchTopicsSuccess = createAction(
  `${tag} fetch topics success`,
  props<FetchTopicsSuccess>()
);

export const fetchTopicsError = createAction(`${tag} fetch topics error`);

export const addTopic = createAction(`${tag} add topic`, props<AddTopic>());

export const addTopicSuccess = createAction(
  `${tag} add topic success`,
  props<AddTopicSuccess>()
);

export const addTopicError = createAction(`${tag} add topic error`);

export const addCommentToTopic = createAction(
  `${tag} add comment to topic`,
  props<AddCommentToTopic>()
);

export const addCommentToTopicSuccess = createAction(
  `${tag} add comment to topic success`
);

export const addCommentToTopicError = createAction(
  `${tag} add comment to topic error`
);

export const addCommentToComment = createAction(
  `${tag} add comment to comment`,
  props<AddCommentToComment>()
);

export const addCommentToCommentSuccess = createAction(
  `${tag} add comment to comment success`
);

export const addCommentToCommentError = createAction(
  `${tag} add comment to comment error`
);
