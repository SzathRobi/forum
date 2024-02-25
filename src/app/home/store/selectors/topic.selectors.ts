import { createFeatureSelector, createSelector } from '@ngrx/store';

import { homeStoreFeatureName } from 'app/home/constants/store.constants';
import { TopicsWebRequestState } from 'app/home/interfaces/topics-web-request-state.interface';
import {
  isErrorState,
  isLoadingState,
  isResultState,
} from 'app/shared/typeguards/web-request-state.guards';

export const selectHomeFeature =
  createFeatureSelector<TopicsWebRequestState>(homeStoreFeatureName);

export const selectTopics = createSelector(
  selectHomeFeature,
  (state: TopicsWebRequestState) =>
    state && isResultState(state) ? state.data.topics : undefined
);

export const selectIsTopicsLoading = createSelector(
  selectHomeFeature,
  (state: TopicsWebRequestState) => isLoadingState(state)
);

export const selectHasTopicsError = createSelector(
  selectHomeFeature,
  (state: TopicsWebRequestState) => isErrorState(state)
);
