import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Topic } from 'app/home/interfaces/topic.interface';
import { fetchTopics } from 'app/home/store/actions/topics.actions';
import {
  selectHasTopicsError,
  selectIsTopicsLoading,
  selectTopics,
} from 'app/home/store/selectors/topic.selectors';

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

  constructor(readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTopics());
  }

  trackById(_: number, topic: Topic): number {
    return topic.id;
  }
}
