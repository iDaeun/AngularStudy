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
    const arr2 = ['one', 'two', 'three', 'four'];
    const arr3 = arr2.map(element => element.length);
    console.log(arr3); // [3, 3, 5, 4]
    // forEach와의 차이점 :
    // forEach -> 상위 스코프 변수를 수정하면서 '사이드 이펙트'를 가지게 됨 = 추적하기 어려운 코드임
    // map -> 부모 스코프 영역을 건드리지 않고 콜백 함수로만으로 목적을 달성함
    // ** 함수형 프로그래밍 패러다임 = '순수 함수'의 연결로부터 도메인을 해결함 : Input, Output이 중요, 다른 영역 간섭 안함 (쉽고 간결한 구조 형성)
  }
}
