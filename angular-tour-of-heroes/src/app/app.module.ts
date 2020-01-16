import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel을 제공해주는 패키지

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 컴포넌트 클래스에 지정하애 하는 메타데이터는 -> @Component 데코레이터에 지정
// 어플리케이션 동작에 필요한 메타데이터는 -> @NgModule 데코레이터에 지정
@NgModule({
  // 사용할 컴포넌트 등록, CLI이 자동으로 등록함
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  // 어플리케이션이 동작할 떄 필요한 외부 모듈 등록
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
