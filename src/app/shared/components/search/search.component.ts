import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() isSearch = new EventEmitter();
  @ViewChild('searchInput', { static: false }) searchRef: ElementRef;
  ngOnInit(): void {
  }


  search(event) {
    this.isSearch.emit(event);
  }

}
