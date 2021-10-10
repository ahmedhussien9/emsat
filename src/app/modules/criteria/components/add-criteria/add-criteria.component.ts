import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';

@Component({
  selector: 'app-add-criteria',
  templateUrl: './add-criteria.component.html',
  styleUrls: ['./add-criteria.component.scss']
})
export class AddCriteriaComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public attachmentsData: any,
    private dialogRef: MatDialogRef<AttachmentsDialogComponent>,
    private httpCriteriaService: HttpCriteriaService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    // this.attachments = this.attachmentsData.attachments;
    // this.title = this.attachmentsData.title;
    // this.image = this.attachmentsData.image;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    console.log('clicked');
    this.loading = true;
    if (this.formGroup.invalid) {
      this.loading = false;
      this.toastr.error("Please enter Criteria name");
      return
    }
    this.httpCriteriaService.addCriteriaApi(this.formGroup.value).subscribe(data => {
      this.toastr.show(data.body['message']);
      this.loading = false;
      this.dialogRef.close(true);
    })
  }

  save() {
    console.log('clicked')
  }

}
