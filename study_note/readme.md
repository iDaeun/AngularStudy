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

