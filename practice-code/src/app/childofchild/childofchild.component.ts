import {Component, DoCheck, Input, OnInit} from '@angular/core';

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
