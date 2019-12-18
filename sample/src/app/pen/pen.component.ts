import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  @Input()
  public title;

  @Output()
  public titleBacka = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.titleBacka.emit(this.title + 'B');
  }

}
