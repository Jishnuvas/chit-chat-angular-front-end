import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatUIModule } from './components/chat-ui/chat-ui.module';
import { EnterChatRoomModule } from './components/enter-chat-room/enter-chat-room.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EnterChatRoomModule, ChatUIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
