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

  // 1-1 example
  public pipeable() {
    this.observerPipeContext.subscribe(
      v => console.log(v)
    );
  }

  // 1-2 example
  public customPipe() {
    const nums = of(1, 2, 3, 4, 5);

    // create custom function
    const cutsom = pipe(
      filter((num: number) => num % 2 !== 0),
      map(num => num * num)
    );

    // use custom function
    const result = cutsom(nums);
    // subscribe and print
    result.subscribe(x => console.log(x)); // 1, 9, 25
  }

  // 1-3 example
  public pipeFunction() {
    const pipeResult = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );

    // subscribe
    pipeResult.subscribe(x => console.log(x)); // 1, 9, 25
  }
}
