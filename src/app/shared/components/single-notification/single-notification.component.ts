import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-notification',
  templateUrl: './single-notification.component.html',
  styleUrls: ['./single-notification.component.scss']
})
export class SingleNotificationComponent implements OnInit {
  @Input() notification: any;

  @Output() isClickedEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.processInput();
  }


  processInput(): void {
    this.notification = this.notification;
  }

  isClicked() {
    this.isClickedEvent.emit()
  }

}
