import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, map, takeUntil, tap } from 'rxjs/operators';
import { StudentI } from 'src/app/shared/models/students.model';
import { HttpTesterService } from './service/http-tester.service';
import { HttpClient } from '@angular/common/http';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: StudentI[];
  loading: boolean = true;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  selected: { startDate: Date, endDate: Date };
  getRequests = [];
  constructor(
    private readonly httpTesterService: HttpTesterService,
    @Optional() public dialogRef: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {
    this.initFormFilter();
  }


  initFormFilter() {
    return this.formGroup = this.fb.group({
      page: [1],
      search: [''],
      to: [''],
      from: ['']
    })
  }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.page = page;
    this.formGroup.get("page").setValue(page);
    this.httpTesterService.getTesterApi(this.formGroup.value, "true").pipe(
      tap(data => {
        this.students = data['body'].users;
        this.totalItems = data['body'].length;
        this.loading = false;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
  }

  displayAttachments(attachments, title, image) {
    const dialogRef = this.dialogRef.open(AttachmentsDialogComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: {
        attachments: attachments,
        title: title,
        image: image
      }
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe();
  }

  approveStudent(studentId) {
    this.httpTesterService.takeActionApi(studentId).subscribe(data => {
      console.log(data);
      this.toastr.success(data.body['message']);
      this.getPage(1)
    })
  }
}
