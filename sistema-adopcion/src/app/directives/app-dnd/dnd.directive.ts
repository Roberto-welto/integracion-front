import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding ('class.fileover') fileOver: boolean;
  @Output () fileDropped = new EventEmitter<any>();
  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver (event) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;
    console.log('drag over')
  }

  @HostListener('dragleave', ['$event']) public onDragLeave (event) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    console.log('drag leave')
  }

  @HostListener('drop', ['$event']) public ondrop (event) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    let files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files)
    }
  }
}
