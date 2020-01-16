import { Component, OnInit } from '@angular/core';
import {computeMsgId} from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {
  xyz = { x: 1, y: 2, a: 3, b: 4 };
  www = [ 5, 6, 7, 8 ];

  // rest parameter
  // 함수의 파라미터로 오는 값들을 '배열'로 전달받음
  // rest파라미터는 항상 제일 마지막 파라미터로 있어야 함
  rest() {
    const { x , y, ...z } = this.xyz;
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // { a: 3, b: 4 }
  }

  // spread operator
  // 대상 배열 또는 iterable(Array, String, Map, Set, DOM 구조, iterator생성해서 next()로 순회할 수 있는 자료구조) -> '개별 요소로 분리'함
  // ... + 형태
  spread() {
    const { x , y, ...z } = this.xyz;
    console.log({ x , y, ...z }); // {x: 1, y: 2, a: 3, b: 4}
    console.log(...this.www); // 5 6 7 8
    console.log({...this.xyz}); // {x: 1, y: 2, a: 3, b: 4}
    // console.log(...this.xyz); Type '{ x: number; y: number; a: number; b: number; }' must have a '[Symbol.iterator]()' method that returns an iterator.
    console.log(...[1, 2, 3]); // 1 2 3
    console.log(...'HELLO'); // H E L L O
  }
  constructor() { }

  ngOnInit() {
  }

}
