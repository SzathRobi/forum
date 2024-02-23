import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { effects } from './store/effects';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([...effects]),
    HomeRoutingModule,
  ],
})
export class HomeModule {}
