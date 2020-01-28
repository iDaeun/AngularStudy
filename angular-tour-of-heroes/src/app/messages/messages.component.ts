import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageComponenet인스턴스 생성할 때 MessageService의 싱글턴 인스턴스를 전달받음
  // messageService => 템플릿에 바인딩되기 때문에 반드시 'public'!!!
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
