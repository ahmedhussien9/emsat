import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() headerOptions: any = { title: null };
  @Output() isClicked = new EventEmitter();
  @Output() isClickedDatePicker = new EventEmitter();
  @Output() isChangeOption = new EventEmitter();

  @Output() isSearch = new EventEmitter();
  @Input() title: any;
  @Input() allowSearch: boolean;
  @Input() allowAdd: boolean;
  @Input() btnTitle: String;
  @Input() allowDatePicker: boolean;
  @Input() allowOptions: boolean;
  @Input() options: any;
  @Input() icon: any;
  constructor() {}

  ngOnInit(): void {}

  clickButton() {
    this.isClicked.emit();
  }

  events: string[] = [];

  selectDatePicker(event) {
    this.isClickedDatePicker.emit(event);
  }
  search(event) {
    this.isSearch.emit(event);
  }

  selectOption(event) {
    this.isChangeOption.emit(event);
  }
}
