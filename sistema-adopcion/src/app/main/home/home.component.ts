import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiUrl: any;

  pets:any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    let pet = {
      "idPet": 1,
      "name": "Tikki",
      "type": 'dog',
      "description": 'Mi mascota',
      "age": '1',
      "urlImg": 'None',
      //"user_id": 1
      }
    // this.http.get<any[]>(`${this.apiUrl}/getpets`).subscribe((res: any) => {
    //   console.log(res)
    // })
    let md5 = Md5.hashStr('1303')
  }

}
