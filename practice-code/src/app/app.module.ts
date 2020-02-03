import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstComponent } from './const/const.component';
import { SpreadComponent } from './spread/spread.component';
import { FilterAndMapComponent } from './filter-and-map/filter-and-map.component';
import { ChildComponent } from './child/child.component';
import { ChildofchildComponent } from './childofchild/childofchild.component';
import { ParentComponent } from './parent/parent.component';
import { CloneComponent } from './clone/clone.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstComponent,
    SpreadComponent,
    FilterAndMapComponent,
    ChildComponent,
    ChildofchildComponent,
    ParentComponent,
    CloneComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
