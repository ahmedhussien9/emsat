import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ApplyExamDialogComponent } from './components/apply-exam-dialog/apply-exam-dialog.component';
import { HttpRecommenededExamsService } from './services/recommeneded-exams.service';

@Component({
  selector: 'app-recommended-exams',
  templateUrl: './recommended-exams.component.html',
  styleUrls: ['./recommended-exams.component.scss']
})
export class RecommendedExamsComponent implements OnInit {
  loading = false;
  exam$: Observable<any[]>;
  constructor(
    private httpRecommenededExamsService: HttpRecommenededExamsService,
    @Optional() public dialogRef: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getExams();
  }


  getExams() {
    this.exam$ = this.httpRecommenededExamsService.getRecommendedExamsApi().pipe(
      map(data => data.body)
    );
  }
  apply(exam) {
    console.log(exam)
    const dialogRef = this.dialogRef.open(ApplyExamDialogComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: exam
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.getExams();
        }
      });
  }

}
