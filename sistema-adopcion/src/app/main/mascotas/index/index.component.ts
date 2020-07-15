import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ModalMascotaComponent } from './modal-mascota/modal-mascota.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mascotas: any;

  constructor(private mascotaService: MascotaService,
              private sanitization: DomSanitizer,
              private http: HttpClient,       
              public dialogRef: MatDialog
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
    })
  }
  
  mostrarDetalle(mascota) {
    this.dialogRef.open(ModalMascotaComponent, {
      width: '1000px',
      height: 'auto',
      data: mascota
    })
  }
}
