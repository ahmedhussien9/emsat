import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/operators';
import { AttachmentsDialogComponent } from 'src/app/shared/components/attachments-dialog/attachments-dialog.component';
import { CenterI } from 'src/app/shared/models/center.model';
import { StudentI } from 'src/app/shared/models/students.model';
import { HttpTesterService } from '../students/service/http-tester.service';
import { HttpCenterService } from './services/http-center.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})
export class CentersComponent implements OnInit {
  centers: CenterI[];
  loading: boolean = true;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  selected: { startDate: Date, endDate: Date };
  getRequests = [];
  constructor(
    private readonly httpCenterService: HttpCenterService,
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
    this.httpCenterService.getCentersApi(this.formGroup.value, "true").pipe(
      tap(data => {
        this.centers = data['body'].centers;
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

  approveCenter(centerID) {
    this.httpCenterService.takeActionApi(centerID).subscribe(data => {
      console.log(data);
      this.toastr.success(data.body['message']);
      this.getPage(1)
    })
  }
}
