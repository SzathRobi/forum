import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeTopicComponent } from './components/home-topic/home-topic.component';
import { HomeRoutingModule } from './home-routing.module';
import { effects } from './store/effects';
import { topicsReducer } from './store/reducers/topics/topics.reducer';

@NgModule({
  declarations: [HomeContainerComponent, HomeTopicComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([...effects]),
    StoreModule.forFeature('home', topicsReducer),
    HomeRoutingModule,
  ],
})
export class HomeModule {}
