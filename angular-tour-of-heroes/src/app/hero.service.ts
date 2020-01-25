import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable({ // 이 클래스가 의존성 주입 시스템에 포함되는 클래스라고 선언하는 구문
  providedIn: 'root' // 메타데이터 값 = root, 최상위 인젝터에 등록됨 (Angular는 HeroService인스턴스 하나만 생성, 이 클래스 주입되는 모든 곳에서 같은 인스턴스 공유)
})
export class HeroService {

  constructor() { }

  // 목 히어로 데이터 반환
  getHeroes(): Hero[] {
    return HEROES;
  }
}
