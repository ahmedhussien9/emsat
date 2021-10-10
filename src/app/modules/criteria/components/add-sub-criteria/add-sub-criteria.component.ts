import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';

@Component({
  selector: 'app-add-sub-criteria',
  templateUrl: './add-sub-criteria.component.html',
  styleUrls: ['./add-sub-criteria.component.scss']
})
export class AddSubCriteriaComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public selectedCriteria: any,
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
    this.httpCriteriaService.addSubCriteriaApi(this.formGroup.value, this.selectedCriteria).subscribe(data => {
      this.toastr.show(`Sub Criteria ${data.body['name']} Updated Successfully`);
      this.loading = false;
      this.dialogRef.close(true);
    })
  }


}
