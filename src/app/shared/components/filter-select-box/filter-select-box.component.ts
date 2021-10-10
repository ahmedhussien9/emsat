import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter-select-box',
  templateUrl: './filter-select-box.component.html',
  styleUrls: ['./filter-select-box.component.scss'],
})
export class FilterSelectBoxComponent implements OnInit {
  @Input() options: any;
  @Input() selectTitle: string;
  @Input() value: number = undefined;
  @Output() selectedItem = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  changeSelection(event) {
    this.value = event.target.value;
    console.log(this.value)
    this.selectedItem.emit(event.target.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);

  }
}
