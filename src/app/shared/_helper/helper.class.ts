import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class Helper {
  constructor() {}

  isFieldValid(field: string, formGroup: FormGroup, formSubmitAttempt) {
    return (
      (!formGroup.get(field).valid && formGroup.get(field).touched) ||
      (formGroup.get(field).untouched &&
        formGroup.get(field).invalid &&
        formSubmitAttempt)
    );
  }

  allowedSpecialChara() {
    return {
      // textPattern: /^[-,@.\/#-&:+\w\s\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd50-\ufd8f\ufe70-\ufefc\uFDF0-\uFDFD\u060C-]*$/,
      psPattern:
        /^[-!$,@.\/#-&:+\w\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd50-\ufd8f\ufe70-\ufefc\uFDF0-\uFDFD\u060C-]*$/,
      email:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      phone:
        /^(\97[\s]{0,1}[\-]{0,1}[\s]{0,1}1|0)(50|55|56|58|54|52|50)[\s]{0,1}[\-]{0,1}[\s]{0,1}[1-9]{1}[0-9]{6}$/,
      idNumber: /^\d{15}$/,
    };
  }

  validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  copyFiles(file, attachmentDocumentsFiles) {
    let copyFiles = [];
    copyFiles = copyFiles.concat(attachmentDocumentsFiles);
    copyFiles.push(file);
    return copyFiles;
  }

  validateFilesExtensions(file, attachmentDocumentsFiles, edit?) {
    const copyFiles = this.copyFiles(file, attachmentDocumentsFiles);
    const allowedFiles = ['.doc', '.docx', '.pdf', '.jpg', '.jpeg', '.png'];
    const regex = RegExp(
      '([a-zA-Z0-9s_\\.-:])+(' + allowedFiles.join('|') + ')$'
    );
    const nospecial = /[!@#$%^&*(),?":{}|<>]/g;

    for (const file of copyFiles) {
      if (file && nospecial.test(file.name)) {
        alert('No Special Charachter allowed!');
        return false;
      }
      if (!file.type && edit) {
        return true;
      }

      const mimeType = file.type;
      if (!regex.test(mimeType.toLowerCase())) {
        return false;
      }
    }
    return true;
  }

  validateImgExtensions(file, attachmentDocumentsFiles, edit?) {
    const copyFiles = this.copyFiles(file, attachmentDocumentsFiles);
    const allowedFiles = ['.jpg', '.jpeg', '.png'];
    const regex = RegExp(
      '([a-zA-Z0-9s_\\.-:])+(' + allowedFiles.join('|') + ')$'
    );
    const mimeType = file.type;
    const nospecial = /[!@#$%^&*(),?":{}|<>]/g;

    for (const file of copyFiles) {
      if (file && nospecial.test(file.name)) {
        alert('No Special Charachter allowed!');
        return;
      }
      if (!file.type && edit && regex.test(mimeType.toLowerCase())) {
        return true;
      }
      if (!regex.test(mimeType.toLowerCase())) {
        return false;
      }
    }
    return true;
  }

  convertbytesToMegaBytes(event) {
    const files = (event.target as HTMLInputElement).files;
    const totalFilesSiezes = Object.values(files).reduce(
      (t, { size }) => t + size,
      0
    );
    const bytesToMegaBytes = totalFilesSiezes / (1024 * 1024);
    if (parseInt(bytesToMegaBytes.toFixed(2)) > 2) {
      return false;
    } else {
      return true;
    }
  }
}
