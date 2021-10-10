import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() customStyle: string;
  @Input() isActive: boolean;
  @Output() onClickEventHandler = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.onClickEventHandler.emit();
  }
}
