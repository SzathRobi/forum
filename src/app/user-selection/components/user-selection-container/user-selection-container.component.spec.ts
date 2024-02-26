import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import {
  selectHasUsersError,
  selectIsUsersLoading,
  selectSelectedUser,
  selectUsers,
} from '../../../shared/store/selectors/users.selectors';
import { userTestData } from '../../testdata/user.testdata';
import { UserSelectionContainerComponent } from './user-selection-container.component';

describe('UserSelectionContainerComponent', () => {
  let component: UserSelectionContainerComponent;
  let fixture: ComponentFixture<UserSelectionContainerComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserSelectionContainerComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch').mockImplementation();

    store.overrideSelector(selectUsers, [userTestData]);
    store.overrideSelector(selectSelectedUser, userTestData);
    store.overrideSelector(selectIsUsersLoading, false);
    store.overrideSelector(selectHasUsersError, false);

    fixture = TestBed.createComponent(UserSelectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
