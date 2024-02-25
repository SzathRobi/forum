import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HOME_PATH, USER_SELECTION_PATH } from 'routes';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  HOME_PATH = HOME_PATH;
  USER_SELECTION_PATH = USER_SELECTION_PATH;
}
