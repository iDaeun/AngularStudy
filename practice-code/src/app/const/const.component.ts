import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-const',
  templateUrl: './const.component.html',
  styleUrls: ['./const.component.css']
})
export class ConstComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
