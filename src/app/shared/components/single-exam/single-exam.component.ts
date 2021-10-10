import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttachmentsDialogComponent } from '../attachments-dialog/attachments-dialog.component';
import { DurationDialogComponent } from '../duration-dialog/duration-dialog.component';

@Component({
  selector: 'app-single-exam',
  templateUrl: './single-exam.component.html',
  styleUrls: ['./single-exam.component.scss']
})
export class SingleExamComponent implements OnInit {
  @Input() exam: any;
  @Output() isApplyExam = new EventEmitter();
  constructor(
    @Optional() public dialogRef: MatDialog,
  ) { }

  ngOnInit(): void {
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

  displayAttachments(attachments, title) {
    console.log(attachments)
    const dialogRef = this.dialogRef.open(AttachmentsDialogComponent, {
      maxWidth: "90%",
      width: "500px",
      minHeight: "200px",
      disableClose: true,
      data: {
        attachments: attachments,
        title: title,
      }
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe();
  }

  apply() {
    this.isApplyExam.emit();
  }

}
