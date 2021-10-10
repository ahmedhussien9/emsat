import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Output() isDatePickerSelected = new EventEmitter();
  @Input() minDate;
  constructor() {}

  ngOnInit(): void {}

  addEvent(event) {
    this.isDatePickerSelected.emit(event);
  }
}
