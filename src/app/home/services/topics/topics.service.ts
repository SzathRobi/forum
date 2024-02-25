import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from 'app/home/interfaces/topic.interface';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  private apiUrl = 'http://0.0.0.0:4200/api/topics';

  constructor(private http: HttpClient) {}

  getTopics(): Observable<any> {
    return this.http.get<Topic[]>(this.apiUrl);
  }
}
