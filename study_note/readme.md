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
