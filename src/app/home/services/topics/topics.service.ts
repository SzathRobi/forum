import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from 'app/home/interfaces/topic.interface';
import { baseApiUrl } from 'app/shared/constants/app.constants';
import { Comment } from 'app/home/interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<any> {
    return this.http.get<Topic[]>(`${baseApiUrl}/topics`);
  }

  postTopic(topic: Omit<Topic, 'id'>): Observable<any> {
    return this.http.post<Omit<Topic, 'id'>>(`${baseApiUrl}/topic/add`, topic);
  }

  postCommentToTopic(comment: Omit<Comment, 'id'>, topicId: number) {
    return this.http.post<Omit<Topic, 'id'>>(
      `${baseApiUrl}/topic/${topicId}/comment/add`,
      comment
    );
  }

  // TODO: check ehy it throws 404
  postCommentToComment(
    comment: Omit<Comment, 'id'>,
    topicId: number,
    commentId: number
  ) {
    return this.http.post<Omit<Topic, 'id'>>(
      `${baseApiUrl}/topic/${topicId}/comment/${commentId}/add`,
      comment
    );
  }
}
