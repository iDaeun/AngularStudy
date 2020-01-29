import {ChangeDetectorRef, Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '{{data.name}} <app-childofchild [data]="data"></app-childofchild>'
})
export class ChildComponent implements DoCheck {
  @Input() data: object;

  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }

  ngDoCheck() {
    console.log('ChildComponent -- Do Check');
  }

}
