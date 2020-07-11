import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  onSignIn() {
    this.authService.signIn(this.user)
      .subscribe(
        res =>{
          localStorage.setItem('token',res.token);
          this.router.navigate(['/'])
        },
        err => {
          console.log(err)
        }
      )
  }

}
