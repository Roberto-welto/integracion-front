import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiUrl: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.apiUrl = " http://127.0.0.1:8000/";
    let pet = {
      "name": "Tikki",
      "age": 1,
      "type": 'dog'
    }
    this.http.get<any[]>(`${this.apiUrl}/getpet`).subscribe((res: any) => {
      console.log(res)
    })

    this.http.post<any[]>(`${this.apiUrl}/apitest/`, pet).subscribe((res: any) => {
      console.log(res)
    })
  }

}
