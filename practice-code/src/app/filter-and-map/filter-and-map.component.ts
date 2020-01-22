import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-and-map',
  templateUrl: './filter-and-map.component.html',
  styleUrls: ['./filter-and-map.component.css']
})
export class FilterAndMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filter() {
    const arr = [1, 5, 10, 2, 7, 11];
    const arr1 = arr.filter(element => element % 5 === 0);
    console.log("filter ---> ", arr1); // [5, 10]
  }
}
