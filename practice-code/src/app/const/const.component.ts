import { Component, OnInit } from '@angular/core';
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
    // const arr = [1, 2, 3, 4];
    // const { arr1 } = this;
    // const len = arr1.length;
    // console.log(len);
  }
  constructor() { }

  ngOnInit() {
  }

}
