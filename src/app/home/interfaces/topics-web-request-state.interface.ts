import { StandardWebRequestState } from 'app/shared/interfaces/web-request-state.interface';

export interface TopicsState {
  topics: any;
}

export type TopicsWebRequestState = StandardWebRequestState<TopicsState>;
