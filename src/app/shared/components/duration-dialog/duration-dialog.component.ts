import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-duration-dialog',
  templateUrl: './duration-dialog.component.html',
  styleUrls: ['./duration-dialog.component.scss']
})
export class DurationDialogComponent implements OnInit {
  durations: any = [];
  title: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public durationData: any,
    private dialogRef: MatDialogRef<DurationDialogComponent>
  ) { }

  ngOnInit(): void {
    this.durations = this.durationData.durations;
    this.title = this.durationData.title;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
