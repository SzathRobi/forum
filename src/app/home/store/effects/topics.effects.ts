import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs';

import { TopicsService } from 'app/home/services/topics/topics.service';
import {
  fetchTopics,
  fetchTopicsError,
  fetchTopicsSuccess,
} from '../actions/topics.actions';

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

  constructor(
    private readonly actions$: Actions,
    private readonly topicsService: TopicsService
  ) {}
}
