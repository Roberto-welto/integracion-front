import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { DonarService } from 'src/app/services/donar/donar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() type: string;
  constructor(
    private authService: AuthService,
    private donacionService: DonarService
  ) { }

  ngOnInit() {
  }

  goTo(event) {
    if (event == 'home') {
      window.location.href = window.location.origin
    } else if (event == 'acercaDe') {
      window.location.href = `${window.location.origin}/acerca-de`
    } 
  }

  logOut() {
    this.authService.logout();
  }

  donar() {
    this.donacionService.donar().subscribe((res: any) => {
      console.log(res)
    })
  }
}
