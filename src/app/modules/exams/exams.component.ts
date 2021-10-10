import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap, finalize } from 'rxjs/operators';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';
import { DurationDialogComponent } from 'src/app/shared/components/duration-dialog/duration-dialog.component';
import { HttpExamService } from '../create-exam/services/http-exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  exams: any[];
  loading: boolean = true;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  selected: { startDate: Date, endDate: Date };
  getRequests = [];
  constructor(
    @Optional() public dialogRef: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private httpExamService: HttpExamService
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
    this.httpExamService.getExamApi(this.formGroup.value, "true").pipe(
      tap(data => {
        this.exams = data['body'].exams;
        this.totalItems = data['body'].length;
        this.loading = false;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
  }

  displayAttachments(attachments, title, image) {
    console.log(attachments)
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

  displayDutrations(durations, title) {
    const dialogRef = this.dialogRef.open(DurationDialogComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: {
        durations: durations,
        title: title,
      }
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe();
  }
}
