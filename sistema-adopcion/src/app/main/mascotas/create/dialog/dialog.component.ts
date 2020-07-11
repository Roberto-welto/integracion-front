import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  mascota: any;
  imagenes: any;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  
    this.mascota = this.data[0];
    this.imagenes = this.data[1];
  
  }

  success() {
    this.dialogRef.close('success')
  }

  error() {
    this.dialogRef.close('error')
  }
}
