import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Author } from '../../interfaces/author.interface';
import { TopicFormValues } from '../../interfaces/topic-form-values.interface';
import { Topic } from '../../interfaces/topic.interface';
import { fetchTopics, addTopic } from '../../store/actions/topics.actions';
import {
  selectHasTopicFormError,
  selectHasTopicsError,
  selectIsTopicFormLoading,
  selectIsTopicsLoading,
  selectTopics,
} from '../../store/selectors/topic.selectors';
import { selectSelectedUser } from '../../../shared/store/selectors/users.selectors';
import { User } from '../../../user-selection/interfaces/user.interface';

@Component({
  selector: 'home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  readonly topics$ = this.store.select(selectTopics);
  readonly isTopicsLoading$ = this.store.select(selectIsTopicsLoading);
  readonly hasTopicsError$ = this.store.select(selectHasTopicsError);
  readonly isTopicFormLoading$ = this.store.select(selectIsTopicFormLoading);
  readonly hasTopicFormError$ = this.store.select(selectHasTopicFormError);
  readonly selectedUser$ = this.store.select(selectSelectedUser);

  constructor(readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTopics());
  }

  onSubmitTopicForm(
    { body, title }: TopicFormValues,
    { email, id, name, role }: User
  ) {
    const author: Author = { email, id, name, role };

    this.store.dispatch(addTopic({ author, body, title }));
  }

  trackById(_: number, topic: Topic): number {
    return topic.id;
  }
}
