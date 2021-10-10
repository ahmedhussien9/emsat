import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosques-updates',
  templateUrl: './mosques-updates.component.html',
  styleUrls: ['./mosques-updates.component.scss'],
})
export class MosquesUpdatesComponent implements OnInit {
  @Input() title: string;
  @Input() imgValue: string;
  @Input() img: string;
  @Input() customStyle: any;
  constructor() {}

  ngOnInit(): void {}
}
