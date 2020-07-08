import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = {}
  comunas;


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getComunas()
    .subscribe(res => {
      this.comunas = res.comunas;
    },
    err => {
      console.log(err)
    }
    )
  }

  onSignUp(){
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token',res.token)
          this.router.navigate(['/']);
        } ,
        err => {
          console.log(err)
        })
  }

}
