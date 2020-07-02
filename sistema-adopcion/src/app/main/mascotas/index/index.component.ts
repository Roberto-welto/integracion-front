import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mascotas: any;

  constructor(private mascotaService: MascotaService,
              private sanitization: DomSanitizer,
              private http: HttpClient          

              ) { }

  ngOnInit() {
    this.obtenerMascotas();
  }


  obtenerMascotas() {
    this.mascotaService.all().subscribe((res: any) => {
      this.mascotas = res;
    })
  }
  
}
