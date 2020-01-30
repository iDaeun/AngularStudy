import {ChangeDetectionStrategy, Component, DoCheck, Input} from '@angular/core';
// <자식1 컴포넌트>
// 부모 컴포넌트에서 받은 data -> 자식2 컴포넌트에 전달
// Input -> 부모에게서 전달받은 데이터 저장
// ngDoCheck -> 동작원리 로그 추가
@Component({
  selector: 'app-child',
  template: '{{data.name}} <app-childofchild [data]="data"></app-childofchild>',
  changeDetection: ChangeDetectionStrategy.OnPush // 추가 (실제 데이터가 변경되었을 때 감지하도록)
})
export class ChildComponent implements DoCheck {
  @Input() data: object;

  ngDoCheck() {
    console.log('ChildComponent -- Do Check');
  }

}
