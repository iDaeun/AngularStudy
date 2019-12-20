import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {RouterModule} from '@angular/router';
import { PenComponent } from './pen/pen.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'book',
        component: BookComponent
      },
      {
       path: 'pen',
       component: PenComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
