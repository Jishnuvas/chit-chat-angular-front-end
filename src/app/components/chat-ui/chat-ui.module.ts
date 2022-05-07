import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatUIRoutingModule } from './chat-ui-routing.module';
import { ChatUIComponent } from './chat-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatUIComponent],
  imports: [
    CommonModule,
    ChatUIRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ChatUIComponent],
})
export class ChatUIModule {}
