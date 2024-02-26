import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeCommentFormComponent } from './home-comment-form.component';

describe('HomeCommentFormComponent', () => {
  let component: HomeCommentFormComponent;
  let fixture: ComponentFixture<HomeCommentFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCommentFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
