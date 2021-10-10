import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';

@Component({
  selector: 'app-edit-sub-criteria',
  templateUrl: './edit-sub-criteria.component.html',
  styleUrls: ['./edit-sub-criteria.component.scss']
})
export class EditSubCriteriaComponent implements OnInit {

  formGroup: FormGroup;
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public subCriteriaData: any,
    private dialogRef: MatDialogRef<EditSubCriteriaComponent>,
    private httpCriteriaService: HttpCriteriaService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.formGroup.get("name").setValue(this.subCriteriaData.item.name)
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    this.loading = true;
    if (this.formGroup.invalid) {
      this.loading = false;
      this.toastr.error("Please enter Criteria name");
      return
    }
    this.httpCriteriaService.editSubCriteriaApi(this.formGroup.value, this.subCriteriaData.crId, this.subCriteriaData.item._id).subscribe(data => {
      this.toastr.show(`Sub Criteria ${data.body['name']} Updated Successfully`);
      this.loading = false;
      this.dialogRef.close(true);
    })
  }

}
