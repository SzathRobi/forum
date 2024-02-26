import { createReducer, on } from '@ngrx/store';

import { TopicsWebRequestState } from 'app/home/interfaces/topics-web-request-state.interface';
import { LOADING_WEB_REQUEST } from 'app/shared/constants/web-request-state.constants';
import { isResultState } from 'app/shared/typeguards/web-request-state.guards';
import {
  addTopic,
  addTopicError,
  AddTopicSuccess,
  addTopicSuccess,
  fetchTopics,
  fetchTopicsError,
  FetchTopicsSuccess,
  fetchTopicsSuccess,
} from '../../actions/topics.actions';
import { initialState, TopicsState } from './topics.state';

export const topicsReducer = createReducer(
  initialState,

  on(fetchTopics, (state: TopicsState) => ({
    topicForm: { ...state.topicForm },
    topics: LOADING_WEB_REQUEST,
  })),

  on(
    fetchTopicsSuccess,
    (state: TopicsState, { topics }: FetchTopicsSuccess) => ({
      topicForm: { ...state.topicForm },
      topics: {
        data: { topics },
      },
    })
  ),

  on(fetchTopicsError, (state: TopicsState) => ({
    topicForm: { ...state.topicForm },
    topics: {
      error: [],
    },
  })),

  on(addTopic, (state: TopicsState) => ({
    topicForm: LOADING_WEB_REQUEST,
    topics: { ...state.topics },
  })),

  on(addTopicSuccess, (state: TopicsState, { topic }: AddTopicSuccess) => ({
    topicForm: { data: undefined },
    topics: isResultState(state.topics)
      ? { data: { topics: [...state.topics.data.topics, topic] } }
      : { ...state.topics },
  })),

  on(addTopicError, (state: TopicsState) => ({
    topicForm: { error: [] },
    topics: { ...state.topics },
  }))
);
