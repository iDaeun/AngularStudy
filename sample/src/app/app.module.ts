import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { PenComponent } from './pen/pen.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteBookComponent,
    PenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
