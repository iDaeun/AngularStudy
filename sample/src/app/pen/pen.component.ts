import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  // @Input() == setter
  @Input()
  public title;

  constructor() { }

  ngOnInit() {
  }

}
