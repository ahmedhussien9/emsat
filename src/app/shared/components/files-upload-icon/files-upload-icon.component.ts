import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-files-upload-icon',
  templateUrl: './files-upload-icon.component.html',
  styleUrls: ['./files-upload-icon.component.scss']
})
export class FilesUploadIconComponent implements OnInit {

  @Input() attachmentDocumentsFiles: any[];
  @Input() attachmentDocuments: any[];
  @Output() removeImageEvent = new EventEmitter();
  @Output() onSelectFileEvent = new EventEmitter();
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

  removeImg(index: number) {
    this.removeImageEvent.emit(index);
  }

  onSelectFile(event) {
    this.onSelectFileEvent.emit(event)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.attachmentDocumentsFiles = changes.attachmentDocumentsFiles.currentValue;
  }

}
