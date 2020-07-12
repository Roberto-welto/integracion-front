import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComunaService } from '../services/comuna/comuna.service';
import { Md5 } from 'ts-md5/dist/md5'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userRegisterForm: FormGroup;
  user = {}
  comunas = [];


  constructor(
    private authService: AuthService,
    private router: Router,
    private comunaService: ComunaService
  ) { }

  ngOnInit() {
    this.userRegisterForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      comuna: new FormControl('', [Validators.required])
    })
    this.getComunas();
  
  }



  getComunas() {
    this.comunaService.all().subscribe((res: any) => {
      this.comunas = res;
      console.log(this.comunas)
    })
  }

  createUser() {
    const user = {
      rut: this.userRegisterForm.value.rut,
      nombre: `${this.userRegisterForm.value.nombre} ${this.userRegisterForm.value.apellido}` ,
      email: this.userRegisterForm.value.correo,
      telefono: this.userRegisterForm.value.telefono,
      direccion: this.userRegisterForm.value.direccion,
      comuna_id: this.userRegisterForm.value.comuna,
      password: Md5.hashStr(this.userRegisterForm.value.password)
    }
    this.authService.signUp(user).subscribe((res: any) => {
      console.log(res)
    })
  }
}
