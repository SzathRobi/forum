import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Topic } from '../../interfaces/topic.interface';

@Component({
  selector: 'home-topic',
  templateUrl: './home-topic.component.html',
  styleUrls: ['./home-topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTopicComponent {
  @Input({ required: true }) topic: Topic;
}
