import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'home-topic-comment',
  templateUrl: './home-topic-comment.component.html',
  styleUrls: ['./home-topic-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTopicCommentComponent {
  @Input({ required: true }) comment: Comment;

  isCommentBlockVisible = false;

  toggleCommentBlockVisible() {
    this.isCommentBlockVisible = !this.isCommentBlockVisible;
  }
}
