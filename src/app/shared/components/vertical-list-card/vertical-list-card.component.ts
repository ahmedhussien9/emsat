import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vertical-list-card',
  templateUrl: './vertical-list-card.component.html',
  styleUrls: ['./vertical-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalListCardComponent implements OnInit {
  @Input() notifications: any;
  @Output() isReadHandlerEventFromListEvent = new EventEmitter();
  @Output() isClickedDeleteFromListEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  isReadHandlerEventFromList(nt) {
    this.isReadHandlerEventFromListEvent.emit(nt);
  }

  isClickedDeleteEventFromList(nt) {
    this.isClickedDeleteFromListEvent.emit(nt);
  }

}
