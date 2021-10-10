import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mob-action-btn',
  templateUrl: './mob-action-btn.component.html',
  styleUrls: ['./mob-action-btn.component.scss']
})
export class MobActionBtnComponent implements OnInit {
  @Input() title: string;
  @Input() isIcon: boolean;
  @Output() isClicked = new EventEmitter();
  @Input() btnWidth: string;
  @Input() isBlock: string;
  @Input() icon = "add";
  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.isClicked.emit();
  }
}
