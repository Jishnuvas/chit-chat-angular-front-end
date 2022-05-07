import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterChatRoomRoutingModule } from './enter-chat-room-routing.module';
import { EnterChatRoomComponent } from './enter-chat-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnterChatRoomComponent],
  imports: [
    CommonModule,
    EnterChatRoomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [EnterChatRoomComponent],
})
export class EnterChatRoomModule {}
