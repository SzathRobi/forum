import { createAction, props } from '@ngrx/store';

import { tag } from 'app/home/constants/store.constants';
import { Topic } from 'app/home/interfaces/topic.interface';

export interface FetchTopicsSuccess {
  topics: Topic[];
}

export const fetchTopics = createAction(`${tag} fetch topics`);

export const fetchTopicsSuccess = createAction(
  `${tag} fetch topics success`,
  props<FetchTopicsSuccess>()
);

export const fetchTopicsError = createAction(`${tag} fetch topics error`);
