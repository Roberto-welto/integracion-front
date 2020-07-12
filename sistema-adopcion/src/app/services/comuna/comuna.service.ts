import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {
  apiUrl = " http://127.0.0.1:8000";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  all() {
    return this.http.get<any[]>(`${this.apiUrl}/comuna`)
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
