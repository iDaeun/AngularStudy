import { Injectable } from '@angular/core';

// messages프로퍼티에 메세지를 캐싱하는 서비스
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // 메세지 추가
  add(message: string) {
    this.messages.push(message);
  }

  // 캐시 비우기
  clear() {
    this.messages = [];
  }
}
