import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstComponent } from './const/const.component';
import { SpreadComponent } from './spread/spread.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
