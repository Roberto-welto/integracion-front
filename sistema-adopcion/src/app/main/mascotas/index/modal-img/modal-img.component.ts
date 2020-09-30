import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent implements OnInit {
  imagenes: any;
  constructor(
    private dialogRef: MatDialogRef<ModalImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.imagenes = this.data;
    // console.log(this.imagenes[0]['ruta_s3'])
  }

  cambiarImgIzq() {
    console.log(1)
  }

  cambiarImgDer() {
    console.log(2)
  }
}
