import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  apiUrl = " http://127.0.0.1:8000";
  constructor(
    private router: Router,
    private http: HttpClient)
   { }

   upload(data, archivo) {
    let formData = new FormData();
    formData.append('key', data.fields['key']);
    formData.append('AWSAccessKeyId', data.fields['AWSAccessKeyId']);
    formData.append('policy', data.fields['policy']);
    formData.append('signature', data.fields['signature']);
    formData.append('file', archivo);

    return this.http.post<any[]>(data.url, formData).pipe(
      catchError(this.handleError)
    )
   }

   getUrl(mascota) {
    return this.http.put<any[]>(`${this.apiUrl}/doc`, mascota).pipe(
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
