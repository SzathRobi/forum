import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetUsersResponse } from 'app/user-selection/interfaces/get-users-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://0.0.0.0:4200/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<GetUsersResponse> {
    return this.http.get<GetUsersResponse>(this.apiUrl);
  }
}
