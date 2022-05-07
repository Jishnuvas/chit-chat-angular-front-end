import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./components/enter-chat-room/enter-chat-room.module').then(
        (m) => m.EnterChatRoomModule
      ),
  },
  {
    path: 'chat-ui',
    loadChildren: () =>
      import('./components/chat-ui/chat-ui.module').then((m) => m.ChatUIModule),
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
