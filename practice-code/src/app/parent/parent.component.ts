import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<button (click)="change()">change</button>\n' +
    '             <br>\n' +
    '             <app-child [data]="data"></app-child>'
})
export class ParentComponent {
  data = {name : 'kang'}
  change() {}
}
