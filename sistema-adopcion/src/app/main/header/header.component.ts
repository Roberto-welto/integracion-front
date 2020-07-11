import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() type: string;
  constructor(
    private authService: AuthService
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
}
