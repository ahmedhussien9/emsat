import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.scss']
})
export class EditCriteriaComponent implements OnInit {

  formGroup: FormGroup;
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public criteriaData: any,
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
    this.formGroup.get("name").setValue(this.criteriaData.name)
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
    this.httpCriteriaService.editCriteriaApi(this.formGroup.value, this.criteriaData._id).subscribe(data => {
      this.toastr.show(`Criteria ${data.body['name']} Updated Successfully`);
      this.loading = false;
      this.dialogRef.close(true);
    })
  }

  save() {
    console.log('clicked')
  }

}
