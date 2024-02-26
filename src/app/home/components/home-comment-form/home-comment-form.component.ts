import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmitCommentForm } from '../../interfaces/submit-comment-body.interface';

@Component({
  selector: 'home-comment-form',
  templateUrl: './home-comment-form.component.html',
  styleUrls: ['./home-comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCommentFormComponent {
  @Input() commentId?: number;

  @Output() submitCommentForm = new EventEmitter<SubmitCommentForm>();

  readonly commentForm = new FormGroup({
    comment: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmitCommentForm() {
    if (!this.commentForm.valid) {
      return;
    }

    this.submitCommentForm.emit({
      commentBody: this.commentForm.value.comment,
      commentId: this.commentId,
    });
    this.commentForm.reset();
  }
}
