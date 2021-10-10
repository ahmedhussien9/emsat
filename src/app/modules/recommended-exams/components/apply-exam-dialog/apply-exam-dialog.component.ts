import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpExamService } from 'src/app/modules/create-exam/services/http-exam.service';

@Component({
  selector: 'app-apply-exam-dialog',
  templateUrl: './apply-exam-dialog.component.html',
  styleUrls: ['./apply-exam-dialog.component.scss']
})
export class ApplyExamDialogComponent implements OnInit {
  times = [];
  loading = false;
  formGroup: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public examData: any,
    private dialogRef: MatDialogRef<ApplyExamDialogComponent>,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private httpExamService: HttpExamService
  ) {

    this.formGroup = this.fb.group({
      "durationId": ["", Validators.required],
      "timeId": ["", Validators.required],
      "center": ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeDate(event) {
    console.log(event.target.value);
    this.times = this.examData.durations.find(duration => duration._id === event.target.value).times;
    console.log(this.times)
  }

  submit() {
    this.loading = true;
    if (this.formGroup.invalid) {
      this.toastr.error("Please enter all the required information");
      this.loading = false;
      return
    }
    this.httpExamService.applyExamApi(this.formGroup.value, this.examData._id).subscribe(data => {
      this.toastr.success("Thanks, You have been applied successfully");
      this.loading = false;
      this.dialogRef.close(true)
    })
  }

}
