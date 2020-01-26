import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs'; // HttpClient클래스가 제공하는 메소드 : 모두 RxJS가 제공하는 Observable타입 반환함

@Injectable({ // 이 클래스가 의존성 주입 시스템에 포함되는 클래스라고 선언하는 구문
  providedIn: 'root' // 메타데이터 값 = root, 최상위 인젝터에 등록됨 (Angular는 HeroService인스턴스 하나만 생성, 이 클래스 주입되는 모든 곳에서 같은 인스턴스 공유)
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // this.heroes = this.heroService.getHeroes(); // 동기 방식으로 동작함 --> 서버의 응답을 기다려야 함, 데이터 즉시 반환 못함
    // 보통 리모트 서버에서 데이터를 가져오기 때문에 '비동기 동작'으로 처리해야 함
    // 비동기 동작 = 콜백 함수 사용해서 처리 가능, Promise를 반환 OR Observable을 반환
    // Angular가 제공하는 HttpClient.get메소드 -> Observable 반환
    // Observable을 반환하도록 구현 :
    return of(HEROES); // 리모트 서버 사용하지 않고 RxJS의 of()함수 사용함
  }
}
