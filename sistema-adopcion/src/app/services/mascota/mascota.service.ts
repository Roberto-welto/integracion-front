import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  apiUrl = " http://127.0.0.1:8000";
  constructor(
    private router: Router,
    private http: HttpClient          
    ) { }




    all() {
      return this.http.get<any[]>(`${this.apiUrl}/pet`)
        .pipe(
          catchError(this.handleError)
        )
    }
    
    post(mascota) {
      return this.http.post<any[]>(`${this.apiUrl}/pet`, mascota)
        .pipe(
          catchError(this.handleError)
        )
    }

    update(mascota, img?) {
      img = img == "" ? null : img;
      return this.http.put<any[]>(`${this.apiUrl}/pet?img=${img}`, mascota)
        .pipe(
          catchError(this.handleError)
        )
    }
    handleError(error: any) {
      if (this.router) {
        const currentUrl = this.router.routerState.snapshot.url;
        let errorUrl = `Ha ocurrido un error en: ${currentUrl}`
        return throwError(errorUrl)
      }
    }
  }
