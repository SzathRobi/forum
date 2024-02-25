import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomeTopicComponent } from './home-topic.component';

describe('HomeTopicComponent', () => {
  let component: HomeTopicComponent;
  let fixture: ComponentFixture<HomeTopicComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopicComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
