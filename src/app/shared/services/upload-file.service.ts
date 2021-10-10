import { Injectable } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from "ngx-file-drop";

export enum FileType {
  FIRST_SAMPLE = "FIRST_SAMPLE",
  SECOND_SAMPLE = "SECOND_SAMPLE",
  THIRD_SAMPLE = "THIRD_SAMPLE"
}

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  public filesSystems: NgxFileDropEntry[] = [];
  firstSampleFiles: File[] = [];
  secondSampleFiles: File[] = [];
  thirdSampleFiles: File[] = [];
  public files: File[] = [];
  units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  constructor() { }


  public dropped(type: string, files: NgxFileDropEntry[]) {
    this.filesSystems = files;
    console.log(this.filesSystems, "files");
    for (const droppedFile of this.filesSystems) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: any) => {
          console.log(droppedFile.relativePath, file);
          file['fileSize'] = this.niceBytes(file.size.toString())
          this.addFiles(type, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  addFiles(type: string, file: File) {
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.firstSampleFiles.push(file);
        break;
      case FileType.SECOND_SAMPLE:
        this.secondSampleFiles.push(file);
        break;
      case FileType.THIRD_SAMPLE:
        this.thirdSampleFiles.push(file);
        break;
      default:
        break;
    }
  }

  setFilesToFormData(formData, files) {
    if (files.length > 0) {
      for (const file of files) {
        if (!file.url) {
          formData.append('attachments', file) // file.name is optional
        }
      }
    }
    return formData;
  }

  setFormGroup(formData, formGroup) {
    for (const field in formGroup.controls) { // 'field' is a string
      const control = formGroup.get(field); // 'control' is a FormControl  
      formData.append(field, control.value)
    }
    return formData;
  }

  niceBytes(x: string) {
    console.log(x);
    let l = 0, n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
      n = n / 1024;
    }

    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + this.units[l]);
  }

  transform(file: any, size: string): string {
    console.log(file, size);
    return this.niceBytes(file[size])
  }


}


