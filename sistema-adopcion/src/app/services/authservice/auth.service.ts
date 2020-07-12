import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://127.0.0.1:8000/'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signIn(user){
    return this.http.post<any>(`${this.URL}user?login=true`, user)
    .pipe(
      catchError(this.handleError)
    );
  }

  signUp(user){
    return this.http.post<any>(this.URL + 'user',user);
  }

  setToken(token) {
    let decodedToken = jwt_decode(token);
    let expDate = new Date(0);
    expDate.setUTCSeconds(decodedToken['exp'])

    localStorage.setItem('user_mail', decodedToken['payload']['email']);
    localStorage.setItem('expires_at', JSON.stringify(expDate));
    
    return this.isLoggedIn()
  }

  public isLoggedIn() {
    let currentDate = new Date();
    let loggedIn;
    if (currentDate <= new Date(this.getExpirationDate())) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return loggedIn
  }
  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('user_mail');
    localStorage.removeItem('expires_at');

    return this.isLoggedIn();
  }


  getExpirationDate() {
    let exp = localStorage.getItem('expires_at');
    exp = JSON.parse(exp);
    return exp
  }
  handleError(error: any) {
    if (this.router) {
      const currentUrl = this.router.routerState.snapshot.url;
      let errorUrl = `Ha ocurrido un error en: ${currentUrl}`
      return throwError(errorUrl)
    }
  }
}
