import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeTopicCommentComponent } from './components/home-topic-comment/home-topic-comment.component';
import { HomeTopicComponent } from './components/home-topic/home-topic.component';
import { homeStoreFeatureName } from './constants/store.constants';
import { HomeRoutingModule } from './home-routing.module';
import { effects } from './store/effects';
import { topicsReducer } from './store/reducers/topics/topics.reducer';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeTopicComponent,
    HomeTopicCommentComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([...effects]),
    StoreModule.forFeature(homeStoreFeatureName, topicsReducer),
    HomeRoutingModule,
  ],
})
export class HomeModule {}
