import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { Comment } from '../../interfaces/comment.interface';
import { SubmitCommentForm } from '../../interfaces/submit-comment-body.interface';
import { addCommentToTopic } from '../../store/actions/topics.actions';
import { User } from '../../../user-selection/interfaces/user.interface';
import { Topic } from '../../interfaces/topic.interface';

@Component({
  selector: 'home-topic',
  templateUrl: './home-topic.component.html',
  styleUrls: ['./home-topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTopicComponent {
  @Input({ required: true }) topic: Topic;
  @Input({ required: true }) selectedUser: User;

  @Output() submitCommentForm = new EventEmitter<string>();

  isCommentBlockVisible = false;

  constructor(private readonly store: Store) {}

  toggleCommentBlockVisible() {
    this.isCommentBlockVisible = !this.isCommentBlockVisible;
  }

  onSubmitCommentForm({ commentBody }: SubmitCommentForm) {
    if (this.selectedUser.role === 1) {
      return;
    }

    const comment: Omit<Comment, 'id'> = {
      author: { ...this.selectedUser, id: this.selectedUser.id },
      body: commentBody,
      comments: [],
    };

    this.store.dispatch(addCommentToTopic({ comment, topicId: this.topic.id }));
  }

  onDeleteTopic() {
    // TODO: implement function
  }
}
