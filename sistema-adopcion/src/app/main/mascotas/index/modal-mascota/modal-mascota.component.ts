import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ModalImgComponent } from '../modal-img/modal-img.component';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-modal-mascota',
  templateUrl: './modal-mascota.component.html',
  styleUrls: ['./modal-mascota.component.scss']
})
export class ModalMascotaComponent implements OnInit {
  mascota: any;
  imagenes: any;
  constructor(
    private dialogRef: MatDialogRef<ModalMascotaComponent>,
    private dialogImg: MatDialog,
    private mascotaService: MascotaService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.mascota = this.data;
    this.imagenes = this.data['imagenes'];
    console.log(this.imagenes)
  }

  openImage(index) {
    console.log(this.imagenes[index])
    this.dialogImg.open(ModalImgComponent, {
      width: 'auto',
      height: 'auto',
      panelClass: 'mat-dialog-imagenes',
      data: this.imagenes[index]
    })
  }
  
  adoptar() {
    
  }

  cerrar() {
    this.dialogRef.close();
  }
}
