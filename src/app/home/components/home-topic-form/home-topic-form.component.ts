import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TopicFormValues } from 'app/home/interfaces/topic-form-values.interface';

@Component({
  selector: 'home-topic-form',
  templateUrl: './home-topic-form.component.html',
  styleUrls: ['./home-topic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTopicFormComponent {
  @Input() hasTopicFormError: boolean = false;
  @Input() isTopicFormLoading: boolean = false;

  @Output() submitTopicForm = new EventEmitter<TopicFormValues>();

  readonly topicForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    body: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmitTopicForm() {
    if (!this.topicForm.valid) {
      return;
    }

    this.submitTopicForm.emit(this.topicForm.getRawValue());
    this.topicForm.reset();
  }
}
