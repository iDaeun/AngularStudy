import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// export해야지 다른 모듈에서 해당 컴포넌트를 import해서 사용할 수 있음
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // 생성자에 HeroService타입의 인자 선언
  constructor(
    private heroService: HeroService
  ) { }
  // 배열 바인딩
  // heroes = HEROES;

  hero: Hero = {
    id : 1,
    name : 'Windstorm'
  };

  // (click) -> onSelect() -> selectedHero에 전달받은 Hero대입
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // Observable타입 반환 -> 응답을 콜백함수로 전달 -> 히어로 데이터를 heroes 프로퍼티에 할당함 (비동기 방식)
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }

  // 라이프싸이클 후킹 함수, 컴포넌트 생성한 직후에 ngOnInit호출함
  // 컴포넌트 초기화하는 로직 작성은 여기에
  ngOnInit() {
    this.getHeroes();
  }

}
