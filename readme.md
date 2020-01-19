# Angular 스터디 정리 노트

참고 :
- 앵귤러 공식 사이트


## 1. 개요
Angular = HTML + TypeScript 플랫폼이자 프레임워크

## 2. 모듈
Angular는 JavaScript모듈과 다르면서 서로 보완적인 NgModule체계를 마련해두었음

NgModule
앵귤러 어플리케이션 구성 요소 중 가장 중요한 것 : 컴포넌트 묶음인 'NgModule'
NgModule = 비슷한 기능을 하나로 묶어서 관리하기 위한 모듈 
- 도메인, 작업흐름, 기능이 연관된 앵귤러 구성요소들을 묶어놓은 단위
- 기능별로 분리해서 효율적으로 구성할 수 있음
- NgModule의 일부를 외부로 공개할 수 있고, 다른 NgModule에서 가져와서 사용할 수 있음

NgModule 메타데이터

클래스에 @NgModule()를 붙여서 정의, 모듈을 정의하는 메타데이터 객체를 전달하면 실행함

메타데이터 프로퍼티 :

- declarations : 해당 NgModule에 포함될 컴포넌트나 디렉티브, 파이프 선언
- exports : 모듈의 구성요소를 다른 NgModule이나 컴포넌트 템플릿으로 재사용할 수 있도록 외부로 공개
- imports : 다른 모듈에서 공개한 클래스를 현재의 NgModule에 가져옴
- providers : NgModiule컨텍스트 안에서 사용하는 서비스 프로바이더를 지정
- bootstrap : 어플리케이션 최상위 뷰로 표시될 최상위 컴포넌트 지정, 이는 최상위 NgModule에서만 지정할 수 있음

최상위 NgModule 예시 : 
<pre><code>import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } </code></pre>

--> 최상위 모듈은 다른 NgModule에서 참조할 일이 없기 때문에 exports로 지정할 필요 없음

CommonModule를 import안해도 NgIf, NgFor사용 가능한 이유?

AppModule안을 보면 BrowserModule를 기본적으로 import하고 있음, 이 모듈이 CommonModule를 import하고 있기 때문
기능 모듈은 브라우저에서 어플리케이션을 구동시키는 데 필요한 기능이 필요 없으므로 BrowserModule를 import하지 않아도 됨, 대신 지시자와 파이프를 사용하기 위해서 CommonModule를 import해야함

.forRoot()
싱글톤으로 사용하는 서비스와 프로바이더를 좀 더 쉽게 사용할 수 있도록 제공하는 함수
- 예 : RouterModule.forRoot() -> Routes객체 전달 -> 앱 전역에서 사용할 수 있는 Router서비스를 설정함 
- 최상위 모듈인 AppModule에서만 사용해야함, 그렇지 않으면 런타임 에러 발생
- 정적 모듈에서 사용하려면 forChild()사용하면 됨

JavaScript 모듈 vs NgModules

Angular CLI로 생성된 기본 AppModule :
보통 (app.module.ts파일) AppModule이라는 이름으로 선언된 '최상위 모듈'이 존재함

<pre><code> /* 가장 처음에는 JavaScript import 구문을 작성합니다. 이 부분은 Angular와 관련된 코드는 아닙니다. */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
/* @NgModule 데코레이터를 지정하면 이 클래스가 Angular의 NgModule이라는 것을 나타냅니다.  */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [     /* 이 부분에 NgModule을 로드합니다. */
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } </code></pre>

다른 점 :
- NgModule범위 -> 구성요소로 선언한 클래스(declarable classes)들로 제한됨 ☜ Angular 컴파일러와 관계 있음
- @NgModule.declarations 배열을 사용해서 여러 파일로 나눌 수 있음
- @NgModule.declarations에 선언한 클래스만 모듈 외부로 공개 가능, export키워드로 지정했다고 모듈에서 참조할 수 있는 것이 아님
- @NgModule.providers배열에서 지정하는 서비스&서비스 프로바이더 사용 -> 어플리케이션 전체를 확장할 수 있음

Angular 컴파일러
= 어플리케이션 코드를 JavaScript 코드로 변환하는 툴
1) 네이티브HTML에 없는 문법이 많은 TypeScript으로 작성된 앵귤러 코드는 그 자체로 실행될 수 없음
2) 앵귤러 컴파일러는 이 템플릿을 읽고 컴포넌트를 연결 (컴포넌트 팩토리 생성)
3) 컴포넌트 팩토리 -> 컴포넌트를 표현하는 100% JavaScript코드를 생성함
4) 3번이 실행될 때 컴포넌트의 @Component에 지정한 내용으로 HTML템플릿과 연결함
5) 컴포넌트에 사용된 디렉티브 & 파이프도 컴포넌트 코드에 연결함
** 컴파일러가 컴파일할 컴포넌트 지정하는 것 & 모듈끼리 어떻게 연결되는지 설정하는 것 == @NgModule 설정에 따름

@NgModule.declarations 
- 모듈에 포함되는 컴포넌트, 디렉티브, 파이프를 배열로 등록할 수 있음 = 'declarable'을 등록함 (대상 클래스는 1개 모듈에만 등록해야함)
- declarable = Angular구성요소이면서 JavaScript클래스임
- declarations배열에 추가하지 말아야 할 클래스 :
   * 다른 모듈에 이미 추가된 클래스
   * 다른 모듈에서 가져온 디렉티브
   * 모듈 클래스
   * 서비스 클래스
   * Angular구성요소가 아닌 클래스나 객체 (ex.문자열, 숫자, 함수 ..)
   
Angular 라이브러리

Angular Framework = 라이브러리 모듈의 묶음 (JavaScript 모듈 형태로 제공됨)
- 각각 Angular 라이브러리는 @angular접두사로 시작, npm으로 설치, JavaScript import구문으로 불러옴
<pre><code>import { BrowserModule } from '@angular/platform-browser';</code></pre>
객체에 접근 (@NgModule 메타데이터)
<pre><code>imports:[ BrowserModule ],</code></pre>
* Angular모듈체계 & JavaScript모듈체계 -> 함께 사용됨

## 3. 컴포넌트
뷰라는 화면의 일부를 조작하는 역할, 뷰에서 사용할 로직을 컴포넌트에 정의함
<pre><code>export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}</code></pre>
- heroes 프로퍼티 선언 : Hero목록을 받아서 저장
- selectHero() : selectedhero프로퍼티 갱신
- 생성자에 TypeScript의 인자 프로퍼티(parameter property) 지정 -> 서비스를 의존성으로 주입받음

인자 프로퍼티
: 변수를 한번에 생성하고 초기화할 수 있다
<pre><code>class Person{
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
 ...
}</code></pre>

name과 age를 인자프로퍼티로 간략하게 선언함 ↓
<pre><code>class Person {
    constructor(private _name: String, private _age: number) {
    }
...
}</code></pre>

컴포넌트는 Angular의 라이프사이클을 따라 생성, 렌더링됨 -> 라이프사이클 후킹 함수로 동작으로 조정할 수 있음
- 디렉티브와 컴포넌트는 같은 라이프사이클을 갖음
- (1) 생성자가 제일 먼저 실행됨
- (2) 그 다음 순서에 따라 라이프사이클 후킹함수가 실행됨 (ng접두사 형태의 메소드)
- 각 후킹 함수에 대한 설명
