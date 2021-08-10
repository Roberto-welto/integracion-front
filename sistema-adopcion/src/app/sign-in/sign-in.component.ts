import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authservice/auth.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userForm: FormGroup;
  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }

  signIn() {
    let user = {
      'username': this.userForm.value.userName,
      'pass': Md5.hashStr(this.userForm.value.password)
    };
    console.log('user')
    this.authService.signIn(user).subscribe((res: any) => {
      if(res !== 'No user matches the provided information') {
        if (this.authService.setToken(res)) {
          this.router.navigate(['mascotas/index'])
        } else {
          console.log('cant log in')
        }
      } else {
        console.log('info error')
      }
    })
  }

}
