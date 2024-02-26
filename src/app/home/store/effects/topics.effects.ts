import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs';

import { TopicsService } from 'app/home/services/topics/topics.service';
import {
  AddCommentToComment,
  addCommentToComment,
  AddCommentToTopic,
  addCommentToTopic,
  addCommentToTopicError,
  addCommentToTopicSuccess,
  AddTopic,
  addTopic,
  addTopicError,
  addTopicSuccess,
  fetchTopics,
  fetchTopicsError,
  fetchTopicsSuccess,
} from '../actions/topics.actions';
import { Topic } from 'app/home/interfaces/topic.interface';
import { PostTopicResponse } from 'app/home/interfaces/post-topic-response.interface';

@Injectable()
export class TopicsEffect {
  fetchTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTopics),
      switchMap((_: Action) => this.topicsService.getTopics()),
      map((topics: any) => fetchTopicsSuccess({ topics: topics.data })),
      catchError(async () => fetchTopicsError())
    )
  );

  postTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTopic),
      switchMap(({ author, body, title }: AddTopic) => {
        const topic: Omit<Topic, 'id'> = {
          author,
          body,
          comments: [],
          title,
        };

        return this.topicsService.postTopic(topic);
      }),
      map(({ data }: PostTopicResponse) => addTopicSuccess({ topic: data })),
      catchError(async () => addTopicError())
    )
  );

  postCommentToTopic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCommentToTopic),
      switchMap(({ comment, topicId }: AddCommentToTopic) =>
        this.topicsService.postCommentToTopic(comment, topicId)
      ),
      map(() => addCommentToTopicSuccess()),
      catchError(async () => addCommentToTopicError())
    )
  );

  postCommentToComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCommentToComment),
      switchMap(({ comment, topicId, commentId }: AddCommentToComment) =>
        this.topicsService.postCommentToComment(comment, topicId, commentId)
      ),
      map(() => addCommentToTopicSuccess()),
      catchError(async () => addCommentToTopicError())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly topicsService: TopicsService
  ) {}
}
