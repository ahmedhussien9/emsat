import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() title: string;
  @Input() isIcon: boolean;
  @Output() isClicked = new EventEmitter();
  @Input() btnWidth: string;
  @Input() isBlock: string;
  @Input() icon = "add";
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.isClicked.emit();
  }

}
