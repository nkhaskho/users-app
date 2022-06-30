import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = `${environment.API_URL}/users`;

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    delete user._id;
    return this.http.post<User>(this.endpoint, user);
  }

  getAllUsers() {
    return this.http.get<User[]>(this.endpoint);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.endpoint}/${user._id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

}
