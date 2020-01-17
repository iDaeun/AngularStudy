import { Component, OnInit } from '@angular/core';
import {isArrayLike} from 'rxjs/internal-compatibility';
@Component({
  selector: 'app-const',
  templateUrl: './const.component.html',
  styleUrls: ['./const.component.css']
})
export class ConstComponent implements OnInit {
  // arr1: number[] = [];

  example() {
    const one = { name: 'here' };
    const two = { id: 2 };
    const { name: first } = one;
    const { id: second } = two;
    const { id: third } = two;

    // identifier로 사용될 때 : key이름, value형태 같아야함 ( name : string, id : number )
    // 같은 형태의 객체에 one, two를 삽입한 것
    // 출력 : value값
    console.log(first); // here (first = identifier)
    console.log(second); // 2 (second = identifier)
    console.log(third); // 2 (third = identifier)

    // 객체 출력
    console.log(two); // {id: 2}
    console.log(two.id); // 2
    console.log(typeof two); // object
  }

  settingType() {
    // 타입 지정
    const setType2 = {
      firstMessage: 'changed firstMessage',
      secondMessage: 'changed secondMessage'
    };
    const{firstMessage, secondMessage} = setType2;
    console.log(firstMessage);
    console.log(secondMessage);

    // Destructuring Array
    const arr = [0, 1, 2, 3, 4];
    const [ arr1 ] = arr;
    console.log(arr1); // 첫번째 인자 0
    const [arr2, arr3, arr4] = arr;
    console.log(arr3); // 두번째 인자 1
    const [arr5, , arr6] = arr;
    console.log(arr6); // 세번째 인자 2
    const [arr7, ...rest] = arr;
    console.log(rest); // [1, 2, 3, 4]
    const name = 'hi there';
    const [arr8, arr9] = name.split(' ');
    console.log(arr8); // array from a function : hi
    const [arr10 = 'arr10', arr11] = arr;
    console.log(arr10); // 만약 인자가 없었으면 arr10으로 출력됨
    let test1 = 'test1';
    let test2 = 'test2';
    const testarr = [test1, test2] = [test2, test1];
    console.log(testarr); // swap varibles ["test2", "test1"]

    // const arr2 = {a: 1, b: 2};
    // const {arr3} = arr2;
    // console.log(arr3);
  }
  constructor() { }

  ngOnInit() {
  }

}
