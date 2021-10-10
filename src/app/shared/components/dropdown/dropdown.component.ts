import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options;
  @Output() isSelectOption = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  changeOption(event) {
    this.isSelectOption.emit(event);
  }

}
