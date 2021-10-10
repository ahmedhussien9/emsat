import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BtnOption } from '../../models/btnOption.model';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss']
})
export class SubmitBtnComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() title: string;
  @Output() isClickedEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }


  isClicked() {
    this.isClickedEvent.emit();
  }

}
