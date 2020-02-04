import {Component, OnInit} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  public observerContext: number;

  // use 'of' to change to Observable
  // use 'pipe' to filter values
  public observerPipeContext: Observable<number> = of(1, 2, 3, 4, 5).pipe(filter(v => v % 2 === 0));

  public observer = new Observable(
    (observer) => {
      observer.next(Math.ceil(Math.random() * 3));
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

  public pipeable() {
    this.observerPipeContext.subscribe(
      v => console.log(v)
    ); // console : 2 , 4
    // this.observer
    //   .pipe(
    //     filter((v: number) => !(v % 2)),
    //     map(v => v + v),
    //   ).subscribe(
    //   v => this.observerContext = v
    // );
    // console.log('pipeable() === ', this.observerPipeContext);
  }

}
