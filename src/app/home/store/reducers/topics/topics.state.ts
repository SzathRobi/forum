import { TopicsWebRequestState } from 'app/home/interfaces/topics-web-request-state.interface';
import { NOT_ASKED_WEB_REQUEST } from 'app/shared/constants/web-request-state.constants';
import { StandardWebRequestState } from 'app/shared/interfaces/web-request-state.interface';

export interface TopicsState {
  topics: TopicsWebRequestState;
  topicForm: StandardWebRequestState<void>;
}

export const initialState: TopicsState = {
  topicForm: NOT_ASKED_WEB_REQUEST,
  topics: NOT_ASKED_WEB_REQUEST,
};
