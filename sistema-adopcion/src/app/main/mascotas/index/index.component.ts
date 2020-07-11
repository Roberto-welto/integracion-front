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
  
  public getSanitizedUrl(url: string) {
    return this.sanitization.bypassSecurityTrustUrl(url)
  }

  ngOnInit() {
    this.obtenerMascotas();
  }


  obtenerMascotas() {
    this.mascotaService.all().subscribe((res: any) => {
      this.mascotas = res;
      this.mascotas.forEach((mascota, index) => {
    
      })
    })
  }
  
}
