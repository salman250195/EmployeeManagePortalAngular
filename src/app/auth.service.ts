import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/user/signup";

  private _loginUrl = "http://localhost:3000/user/login";

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  // Auth Servcie
  // SignUp (POST Method)
  registerUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(this._registerUrl, user, {headers: headers})
  }

  // Login (POST Method)
  loginUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(this._loginUrl, user, {headers: headers})
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
