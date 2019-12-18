import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.css']
})
export class NoteBookComponent implements OnInit {

  @Input()
  public title;

  @Output()
  public titleBack1 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
