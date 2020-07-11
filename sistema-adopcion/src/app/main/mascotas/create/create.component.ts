import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoMascotaService } from 'src/app/services/tipo_mascota/tipo-mascota.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  mascotaForm: FormGroup;
  tipoMascotas: any;
  documentos: any[];
  constructor(private mascotaService: MascotaService,
              private documentoService: DocumentoService,
              private tipoMascotaService: TipoMascotaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.documentos = [];
    this.mascotaForm = new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      tipoMascota: new FormControl(''),
      descripcion: new FormControl(''),
      archivos: new FormControl('')
    });
    this.obtenerTipoMascotas();
  }


  onFileDropped(event) {
    for (const archivo of event) {
      archivo['progress'] = 0;
      let reader = new FileReader();
      reader.onload = (e) => {
        archivo['b64'] = e.target['result']
      }
      reader.readAsDataURL(archivo);
      this.documentos.push(archivo);
      console.log(this.documentos)
    }
    this.progress(0);
  }

  fileBrowseHandler(event) {
    for (const archivo of event) {
      archivo['progress'] = 0;
      let reader = new FileReader();
      reader.onload = (e) => {
        archivo['b64'] = e.target['result']
      }
      reader.readAsDataURL(archivo);
      this.documentos.push(archivo);
      console.log(this.documentos)
    }

    this.progress(0);
  }

  obtenerTipoMascotas() {
    this.tipoMascotaService.all().subscribe((res: any) => {
      this.tipoMascotas = res;
    })
  }
  
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  progress(index: number) {
    setTimeout(() => {
      if (index === this.documentos.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.documentos[index].progress === 100) {
            clearInterval(progressInterval);
            this.progress(index + 1);
          } else {
            this.documentos[index].progress += 5;
          }
        }, 100);
      }
    }, 600);
  }

  addMascota() {
    const mascota = { 
      'nombre': this.mascotaForm.value.nombre,
      'edad': this.mascotaForm.value.edad,
      'tipo_mascota_id': this.mascotaForm.value.tipoMascota,
      'descripcion': this.mascotaForm.value.descripcion
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: [ mascota, this.documentos ]
    })

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res == 'success') {
        this.mascotaService.post(mascota).subscribe((res: any) => {
          let mascotaPut = res;
          console.log(mascotaPut)
          console.log(this.documentos)
          if (this.documentos.length > 0) {
            for(let i = 0, doc; doc=this.documentos[i]; i++) {
              mascotaPut['documento'] = {}; 
              mascotaPut['documento']['name'] = doc.name;
              mascotaPut['documento']['objKey'] = `${mascotaPut['id']}/${doc.name}`;
              mascotaPut['documento']['ruta_s3'] = `https://s3.amazonaws.com/sistema.adopcion/${mascotaPut['id']}/${doc.name}`;
              console.log(mascotaPut)
              this.documentoService.getUrl(mascotaPut).subscribe((res: any) => {
                this.documentoService.upload(res, doc).subscribe((res: any) => {
                  this.mascotaService.update(mascotaPut, 'true').subscribe((res: any) => {
                    console.log(res)
                  })
                })
              })
             }
          }
        })
      } 
    })

    // this.mascotaService.post(mascota).subscribe((res: any) => {
    //   let mascotaPut = res;
    //   console.log(mascotaPut)
    //   console.log(this.documentos)
    //   if (this.documentos.length > 0) {
    //     for(let i = 0, doc; doc=this.documentos[i]; i++) {
    //       mascotaPut['documento'] = {}; 
    //       mascotaPut['documento']['name'] = doc.name;
    //       mascotaPut['documento']['objKey'] = `${mascotaPut['id']}/${doc.name}`;
    //       mascotaPut['documento']['ruta_s3'] = `https://s3.amazonaws.com/sistema.adopcion/${mascotaPut['id']}/${doc.name}`;
    //       console.log(mascotaPut)
    //       this.documentoService.getUrl(mascotaPut).subscribe((res: any) => {
    //         this.documentoService.upload(res, doc).subscribe((res: any) => {
    //           this.mascotaService.update(mascotaPut, 'true').subscribe((res: any) => {
    //             console.log(res)
    //           })
    //         })
    //       })
    //      }
    //   }
    // })
  }
}
