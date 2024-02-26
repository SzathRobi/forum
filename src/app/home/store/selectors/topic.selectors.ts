import { createFeatureSelector, createSelector } from '@ngrx/store';

import { homeStoreFeatureName } from '../../constants/store.constants';
import {
  isErrorState,
  isLoadingState,
  isResultState,
} from '../../../shared/typeguards/web-request-state.guards';
import { TopicsState } from '../reducers/topics/topics.state';
import { Topic } from '../../interfaces/topic.interface';

export const selectHomeFeature =
  createFeatureSelector<TopicsState>(homeStoreFeatureName);

export const selectTopics = createSelector(
  selectHomeFeature,
  (state: TopicsState): Topic[] | undefined =>
    state && isResultState(state.topics) ? state.topics.data.topics : undefined
);

export const selectIsTopicsLoading = createSelector(
  selectHomeFeature,
  (state: TopicsState) => isLoadingState(state.topics)
);

export const selectHasTopicsError = createSelector(
  selectHomeFeature,
  (state: TopicsState) => isErrorState(state.topics)
);

export const selectIsTopicFormLoading = createSelector(
  selectHomeFeature,
  (state: TopicsState) => isLoadingState(state.topicForm)
);

export const selectHasTopicFormError = createSelector(
  selectHomeFeature,
  (state: TopicsState) => isErrorState(state.topicForm)
);
