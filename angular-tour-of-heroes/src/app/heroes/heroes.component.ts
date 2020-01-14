import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// export해야지 다른 모듈에서 해당 컴포넌트를 import해서 사용할 수 있음
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';

  constructor() { }

  // 라이프싸이클 후킹 함수, 컴포넌트 생성한 직후에 ngOnInit호출함
  // 컴포넌트 초기화하는 로직 작성은 여기에
  ngOnInit() {
  }

}
