import {Component, DoCheck, Input} from '@angular/core';
// <자식2 컴포넌트>
// Input -> data 전달받음
// ngDoCheck -> 로그 찍음
@Component({
  selector: 'app-childofchild',
  template: '',
})
export class ChildofchildComponent implements DoCheck {
  @Input() data: object;

  ngDoCheck() {
    console.log('ChildofchildComponent -- Do Check');
  }
}
