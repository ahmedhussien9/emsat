import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap, finalize } from 'rxjs/operators';
import { DurationDialogComponent } from 'src/app/shared/components/duration-dialog/duration-dialog.component';
import { HttpCenterExamApplicantService } from './services/http-center-exam-applicant.service';

@Component({
  selector: 'app-centers-exam-applicants',
  templateUrl: './centers-exam-applicants.component.html',
  styleUrls: ['./centers-exam-applicants.component.scss']
})
export class CentersExamApplicantsComponent implements OnInit {
  centerExams = [];
  examApplicants = [];
  loading: boolean = false;
  loadingSub: boolean = false;
  selectedExam: any;
  page: number = 1;
  pageSub: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  formGroupSubCriteria: FormGroup;
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  constructor(
    private readonly httpCenterExamApplicantService: HttpCenterExamApplicantService,
    @Optional() public dialogRef: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.initFormFilter();
    this.initFormSubCriteriaFilter()
  }

  initFormFilter() {
    return this.formGroup = this.fb.group({
      page: [1],
      search: [''],
      to: [''],
      from: ['']
    })
  }

  initFormSubCriteriaFilter() {
    return this.formGroupSubCriteria = this.fb.group({
      page: [1],
    })
  }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.page = page;
    this.formGroup.get("page").setValue(page);
    this.httpCenterExamApplicantService.getCenterExams(this.formGroup.value, "true").pipe(
      tap(data => {
        console.log(data);
        this.centerExams = data['body'].exams;
        this.totalItems = data['body'].length;
        this.loading = false;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
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
  

  getExamAppliant(page, crId) {
    this.loadingSub = true;
    this.pageSub = page;
    this.formGroupSubCriteria.get("page").setValue(this.pageSub);
    this.httpCenterExamApplicantService.getExamApplicants(this.formGroupSubCriteria.value, "true", crId).pipe(
      tap(data => {
        console.log(data);
        this.examApplicants = data['body'].applicants;
        this.totalItems = data['body'].length;
        this.loadingSub = false;
      }),
      finalize(() => this.loadingSub = false)
    ).subscribe();
  }


  selectedExamHandler(exam) {
    this.selectedExam = exam;
    console.log(exam)
    this.getExamAppliant(1, this.selectedExam._id)
  }




  // approveCenter(centerID) {
  //   this.httpCriteriaService.takeActionApi(centerID).subscribe(data => {
  //     console.log(data);
  //     this.toastr.success(data.body['message']);
  //     this.getPage(1)
  //   })
  // }








}
