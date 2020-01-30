import {ChangeDetectorRef, Component, DoCheck, Input} from '@angular/core';
// <자식1 컴포넌트>
// 부모 컴포넌트에서 받은 data -> 자식2 컴포넌트에 전달
// Input -> 부모에게서 전달받은 데이터 저장
// ngDoCheck -> 동작원리 로그 추가
@Component({
  selector: 'app-child',
  template: '{{data.name}} ' +
    '<button (click)="doDetect()">doDetect</button>' +
    '<app-childofchild [data]="data"></app-childofchild>',
})
export class ChildComponent implements DoCheck {
  @Input() data: object;

  isDetach: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach(); // 해당 컴포넌트와 하위 컴포넌트는 변경감지 프로세스 트리에서 분리됨
  }

  toggle(){
    this.isDetach = !this.isDetach;
    if(this.isDetach) {
      this.cdr.detach();
    } else {
      this.cdr.reattach(); // // 해당 컴포넌트와 하위 컴포넌트는 변경감지 프로세스 트리에 추가됨
    }
  }

  doDetect(){
    this.cdr.detectChanges(); // 변경 감지 수행
  }

  ngDoCheck() {
    console.log('ChildComponent -- Do Check');
  }

}
