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

}
