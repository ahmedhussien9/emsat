import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-box',
  templateUrl: './switch-box.component.html',
  styleUrls: ['./switch-box.component.scss'],
})
export class SwitchBoxComponent implements OnInit {
  @Input() options;
  constructor() {}

  ngOnInit(): void {}
}
