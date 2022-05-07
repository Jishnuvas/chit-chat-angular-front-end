import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterChatRoomComponent } from './enter-chat-room.component';

const routes: Routes = [{ path: '', component: EnterChatRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterChatRoomRoutingModule {}
