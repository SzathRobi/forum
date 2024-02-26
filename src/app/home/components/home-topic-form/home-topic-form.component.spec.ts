import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeTopicFormComponent } from './home-topic-form.component';

describe('HomeTopicFormComponent', () => {
  let component: HomeTopicFormComponent;
  let fixture: ComponentFixture<HomeTopicFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopicFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
