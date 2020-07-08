import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

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
    return this.http.post<any>(this.URL + '/signIn',user);
  }

  signUp(user){
    return this.http.post<any>(this.URL + '/signUp',user);
  }

  getComunas(){
    return this.http.get<any>(this.URL + '/comunas');
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signIn']);
  }
}
