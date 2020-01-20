import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

const localUrl = 'assets/userInfo.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(localUrl);
  }
}
