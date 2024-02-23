import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-container-component',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {}
