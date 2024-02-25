import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs';

import {
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
} from '../actions/users.actions';
import { UserService } from 'app/shared/services/topics/user.service';
import { GetUsersResponse } from 'app/user-selection/interfaces/get-users-response.interface';

@Injectable()
export class UserEffect {
  fetchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsers),
      switchMap((_: Action) => this.userService.getUsers()),
      map(({ data }: GetUsersResponse) => fetchUsersSuccess({ users: data })),
      catchError(async () => fetchUsersError())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}
}
