import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstComponent } from './const/const.component';
import { SpreadComponent } from './spread/spread.component';
import { FilterAndMapComponent } from './filter-and-map/filter-and-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstComponent,
    SpreadComponent,
    FilterAndMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
