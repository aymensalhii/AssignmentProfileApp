import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { PartialUser } from '../models/partial-user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPartialUsers(): Observable<PartialUser[]> {
    return this.http.get<User[]>('/assets/data/data.json').pipe(
      map(users => users.map(user => ({ id: user.id, name: user.name, email: user.email })))
    );
  }
  
  getUserDetails(id: number): Observable<User | undefined> {
    return this.http.get<User[]>('/assets/data/data.json').pipe(
      map(users => users.find(user => user.id === id))
    );
  }
}
