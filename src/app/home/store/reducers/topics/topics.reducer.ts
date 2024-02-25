import { createReducer, on } from '@ngrx/store';

import { TopicsWebRequestState } from 'app/home/interfaces/topics-web-request-state.interface';
import { LOADING_WEB_REQUEST } from 'app/shared/constants/web-request-state.constants';
import {
  fetchTopics,
  fetchTopicsError,
  FetchTopicsSuccess,
  fetchTopicsSuccess,
} from '../../actions/topics.actions';
import { initialState } from './topics.state';

export const topicsReducer = createReducer(
  initialState,

  on(fetchTopics, (_: TopicsWebRequestState) => LOADING_WEB_REQUEST),

  on(
    fetchTopicsSuccess,
    (_: TopicsWebRequestState, { topics }: FetchTopicsSuccess) => ({
      data: { topics },
    })
  ),

  on(fetchTopicsError, (_: TopicsWebRequestState) => ({
    error: [],
  }))
);
