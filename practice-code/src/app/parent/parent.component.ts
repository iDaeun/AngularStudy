import { Component, OnInit } from '@angular/core';
// <부모 컴포넌트>
// button 클릭 -> change() => 아무런 데이터 변경 없음
// child컴포넌트에게 data 전달
@Component({
  selector: 'app-parent',
  template: '<button (click)="change()">change</button>\n' +
    '             <br>\n' +
    '             <app-child [data]="data"></app-child>'
})
export class ParentComponent {
  data = {name : 'kang'};
  change() {
    this.data.name = this.data.name + '1'; // 객체의 value만 변경했기 때문에 레퍼런스 유지 --> 변경 감지 못함
  }
}
