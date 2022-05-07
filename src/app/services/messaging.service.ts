import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CompatClient, Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MessagingStateService } from './messaging-state.service';

@Injectable({
  providedIn: 'root',
})
export class MessagingService extends MessagingStateService {
  constructor(private router: Router) {
    super();
  }
  private stompClient!: CompatClient;
  connect(username: string) {
    const _this = this;
    const socket = new SockJS('/socket-client/socket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect(
      {},
      () => {
        _this.stompClient.subscribe('/topic/group', (data: any) => {
          this.handleMessage(JSON.parse(data.body));
          this.router.navigateByUrl('/chat-ui');
        });
        _this.stompClient.send(
          '/app/addUser',
          {},
          JSON.stringify({ user: username, type: 'JOIN' })
        );
      },
      this.onError
    );
  }

  onError = (err: any) => {
    console.log('Error: ' + err);
  };

  sendMessage(message: string) {
    this.stompClient.send(
      '/app/sendMessage',
      {},
      JSON.stringify({ user: '', type: 'CHAT', content: message })
    );
  }
  handleMessage(message: any) {
    switch (message.type) {
      case 'JOIN':
        this.router.navigateByUrl('/chat-ui');
        this.setMessage(message);
        break;
      case 'LEAVE':
        this.setMessage(message);
        break;
      default:
        this.setMessage(message);
        break;
    }
  }
}
