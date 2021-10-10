import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs/internal/Subject';
import { tap, finalize, takeUntil } from 'rxjs/operators';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';
import { CriteriaI } from 'src/app/shared/models/criteria.model';
import { AddCriteriaComponent } from './components/add-criteria/add-criteria.component';
import { AddSubCriteriaComponent } from './components/add-sub-criteria/add-sub-criteria.component';
import { EditCriteriaComponent } from './components/edit-criteria/edit-criteria.component';
import { EditSubCriteriaComponent } from './components/edit-sub-criteria/edit-sub-criteria.component';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  criterias: CriteriaI[];
  subCriterias: CriteriaI[];
  selectedCriteria: CriteriaI;
  loading: boolean = false;
  loadingSub: boolean = false;
  page: number = 1;
  pageSub: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  formGroupSubCriteria: FormGroup;
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  $destroy = new Subject<any>();
  constructor(
    private readonly httpCriteriaService: HttpCriteriaService,
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
    this.httpCriteriaService.getCriteriaApi(this.formGroup.value, "true").pipe(
      tap(data => {
        console.log(data);
        this.criterias = data['body'].criterias;
        this.totalItems = data['body'].length;
        this.loading = false;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
  }

  getSubCriterias(page, crId) {
    this.loadingSub = true;
    this.pageSub = page;
    this.formGroupSubCriteria.get("page").setValue(this.pageSub);
    this.httpCriteriaService.getSubCriteriaApi(this.formGroupSubCriteria.value, "true", crId).pipe(
      tap(data => {
        console.log(data);
        this.subCriterias = data['body'].subcriterias;
        this.totalItems = data['body'].length;
        this.loadingSub = false;
      }),
      finalize(() => this.loadingSub = false)
    ).subscribe();
  }


  selectCriteria(criteria) {
    this.selectedCriteria = criteria;
    this.getSubCriterias(1, this.selectedCriteria._id)
  }




  approveCenter(centerID) {
    this.httpCriteriaService.takeActionApi(centerID).subscribe(data => {
      console.log(data);
      this.toastr.success(data.body['message']);
      this.getPage(1)
    })
  }


  addCriteria() {
    const dialogRef = this.dialogRef.open(AddCriteriaComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.$destroy))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.getPage(1);
        }
      });
  }

  editCriteria(item: CriteriaI) {
    const dialogRef = this.dialogRef.open(EditCriteriaComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: item
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.$destroy))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.getPage(1);
        }
      });
  }


  editSubCriteria(item: CriteriaI) {
    const dialogRef = this.dialogRef.open(EditSubCriteriaComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: {
        item: item,
        crId: this.selectedCriteria._id
      }
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.$destroy))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.getSubCriterias(1, this.selectedCriteria._id);
        }
      });
  }
  addSubCriteria() {
    if (!this.selectedCriteria._id) {
      this.toastr.error("Please select Creitera first");
      return;
    }
    const dialogRef = this.dialogRef.open(AddSubCriteriaComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: this.selectedCriteria._id
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.$destroy))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.getSubCriterias(1, this.selectedCriteria._id);
        }
      });
  }


  deleteCriteria(cr: CriteriaI) {
    const criteria = cr;
    this.httpCriteriaService.deleteCriteriaApi(cr._id).subscribe(data => {
      console.log(data);
      this.toastr.success(data.body['message']);
      this.getPage(criteria._id)
    })
  }

  deleteSubCriteria(subCri: CriteriaI) {
    this.httpCriteriaService.deleteSubCriteriaApi(this.selectedCriteria._id, subCri._id).subscribe(data => {
      this.toastr.show(data.body['message']);
      this.getSubCriterias(1, this.selectedCriteria._id)
    })
  }



}
