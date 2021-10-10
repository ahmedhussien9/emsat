import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-attachments-dialog',
  templateUrl: './attachments-dialog.component.html',
  styleUrls: ['./attachments-dialog.component.scss'],
})
export class AttachmentsDialogComponent implements OnInit {
  attachments: any = [];
  title: string;
  image: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public attachmentsData: any,
    private dialogRef: MatDialogRef<AttachmentsDialogComponent>
  ) { }

  ngOnInit(): void {
    this.attachments = this.attachmentsData.attachments;
    this.title = this.attachmentsData.title;
    this.image = this.attachmentsData.image;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
