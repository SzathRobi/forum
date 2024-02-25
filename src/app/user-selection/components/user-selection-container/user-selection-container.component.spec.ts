import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserSelectionContainerComponent } from './user-selection-container.component';

describe('UserSelectionContainerComponent', () => {
  let component: UserSelectionContainerComponent;
  let fixture: ComponentFixture<UserSelectionContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [UserSelectionContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
