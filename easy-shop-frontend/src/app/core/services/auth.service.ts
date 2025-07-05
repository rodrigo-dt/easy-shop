import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthLoginRequest} from '../interfaces/auth-login.request';
import { environment } from '../../../environments/environment';
import {AuthLoginResponse} from '../interfaces/auth-login.response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly BASE_URL = environment.host + '/auth/login';

  constructor(private http: HttpClient) {}

  doLogin(authLogin: AuthLoginRequest): Observable<AuthLoginResponse> {
    return this.http.post<AuthLoginResponse>(this.BASE_URL, authLogin);
  }
}
