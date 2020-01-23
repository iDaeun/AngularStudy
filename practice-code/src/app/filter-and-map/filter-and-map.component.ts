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
    console.log("filter ---> ", arr1); // [5, 10] ,
    // 만족하는 요소가 없다면 빈 배열 반환 (undefined가 아니라) --> 빈 배열을 반환하기 때문에 중간에 오류가 나지 않고 다음 array메소드 사용 가능!

  }

  map() {

  }
}
