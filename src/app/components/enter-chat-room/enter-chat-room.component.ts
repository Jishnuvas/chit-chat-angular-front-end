import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-enter-chat-room',
  templateUrl: './enter-chat-room.component.html',
  styleUrls: ['./enter-chat-room.component.scss'],
})
export class EnterChatRoomComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private message: MessagingService
  ) {}
  enterChatRoom!: FormGroup;
  ngOnInit(): void {
    this.enterChatRoom = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  onSubmit() {
    if (this.enterChatRoom.valid) {
      this.message.connect(this.enterChatRoom.value.username);
      this.enterChatRoom.reset();
    }
  }
}
