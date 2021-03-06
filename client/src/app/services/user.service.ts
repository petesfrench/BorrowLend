import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = `${apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/username/${username}`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${userId}`);
  }

  addToToBorrowList(userId: number, itemId: number): Observable<User> {
    return this.http.put<User>(
      `${this.userUrl}/toBorrowListAdd/${userId}/${itemId}`,
      {}
    );
  }

  removeFromToBorrowList(userId: number, itemId: number): Observable<User> {
    return this.http.put<User>(
      `${this.userUrl}/toBorrowListRem/${userId}/${itemId}`,
      {}
    );
  }

  addToToLendList(userId: number, itemId: number): Observable<User> {
    return this.http.put<User>(
      `${this.userUrl}/toLendListAdd/${userId}/${itemId}`,
      {}
    );
  }

  removeFromToLendList(userId: number, itemId: number): Observable<User> {
    return this.http.put<User>(
      `${this.userUrl}/toLendListRem/${userId}/${itemId}`,
      {}
    );
  }

  getUsersLending(itemId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/lending/${itemId}`);
  }
}
