import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonarService {
  apiUrl = " http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  donar() {
    return this.http.get<any[]>(`${this.apiUrl}/donar`);
  }
}
