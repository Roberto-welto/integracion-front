import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {

  apiUrl = "http://127.0.0.1:8000/";
  userId:number = 1;
  pets: Pet[] = [];


  constructor(public http: HttpClient) { }
  ngOnInit() {


    this.http.get<any[]>(`${this.apiUrl}user_pets/${this.userId}`).subscribe((res: any) => {
      this.pets = res;
    })
  }

  modifyPet(pet) {

    this.ngOnInit();
  }

  removeUser(idPet: number) {
    this.http.delete<any[]>(`${this.apiUrl}pet/${idPet}`).subscribe((res: any) => {
      console.log(res)
    })
    this.ngOnInit();
  }

  addPet(formData){
    this.http.post<any[]>(`${this.apiUrl}user_pets/${this.userId}`, formData).subscribe((res: any) => {
      this.pets = res;
    })
  }

}
