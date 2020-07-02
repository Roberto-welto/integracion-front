import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoMascotaService } from 'src/app/services/tipo_mascota/tipo-mascota.service';

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
              private tipoMascotaService: TipoMascotaService) { }

  ngOnInit() {
    this.mascotaForm = new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      tipoMascota: new FormControl(''),
      descripcion: new FormControl(''),
      archivos: new FormControl('')
    });
    this.obtenerTipoMascotas();
  }

  changeEvents(e: any) {
    let documentos = e;
    let mascota = [{
      "nombre": "tikki",
      "tipo_mascota_id": 2,
      "descripcion": "Perro buffalo",
      "edad": 1
    }]
    console.log(mascota)
    this.mascotaService.post(mascota).subscribe((res: any) => {
      console.log(res)
      let mascotaPut = res;
      console.log(mascotaPut)
      console.log(documentos)
      mascotaPut['documentos'] = documentos;
      if(documentos.length > 0) {
        for(let i = 0, documento; documento=documentos[i]; i++) {
          mascotaPut["objKey"] = `${mascotaPut.id}/${documento.name}`
          this.mascotaService.update(mascotaPut).subscribe((res: any) => {
            this.documentoService.upload(res, documento).subscribe((res: any) => {
              console.log(res)
              console.log('success')
            })
          })
        }
      }
    })
  }

  onFileDropped(event) {
    this.documentos = [];
    for (const archivo of event) {
      archivo['progress'] = 0;
      this.documentos.push(archivo);
    }
    this.progress(0);
  }

  fileBrowseHandler(event) {
    this.documentos = [];
    for (const archivo of event) {
      archivo['progress'] = 0;
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
}
