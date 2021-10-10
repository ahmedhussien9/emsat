import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    console.log("heey")
    this.onClick.emit()
  }

}
