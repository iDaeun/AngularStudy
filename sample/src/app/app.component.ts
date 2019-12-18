import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  public getTitle(title) {
    console.log('title', title);
  }

  title = 'A';

}
