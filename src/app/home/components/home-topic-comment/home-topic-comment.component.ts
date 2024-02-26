import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { SubmitCommentForm } from 'app/home/interfaces/submit-comment-body.interface';
import { addCommentToComment } from 'app/home/store/actions/topics.actions';
import { User } from 'app/user-selection/interfaces/user.interface';

import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'home-topic-comment',
  templateUrl: './home-topic-comment.component.html',
  styleUrls: ['./home-topic-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTopicCommentComponent {
  @Input({ required: true }) topicId: number;
  @Input({ required: true }) comment: Comment;
  @Input({ required: true }) selectedUser: User;

  isCommentBlockVisible = false;

  constructor(private readonly store: Store) {}

  toggleCommentBlockVisible() {
    this.isCommentBlockVisible = !this.isCommentBlockVisible;
  }

  onSubmitCommentForm({ commentBody, commentId }: SubmitCommentForm) {
    if (this.selectedUser.role === 1) {
      return;
    }

    const comment: Omit<Comment, 'id'> = {
      author: { ...this.selectedUser, id: undefined },
      body: commentBody,
      comments: [],
    };

    this.store.dispatch(
      addCommentToComment({
        comment,
        topicId: this.topicId,
        commentId: commentId,
      })
    );
  }

  onDeleteComment() {
    // TODO: implement funciton
  }
}
