import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeCommentFormComponent } from './components/home-comment-form/home-comment-form.component';

import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeTopicCommentComponent } from './components/home-topic-comment/home-topic-comment.component';
import { HomeTopicFormComponent } from './components/home-topic-form/home-topic-form.component';
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
    HomeTopicFormComponent,
    HomeCommentFormComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([...effects]),
    HomeRoutingModule,
    StoreModule.forFeature(homeStoreFeatureName, topicsReducer),
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
