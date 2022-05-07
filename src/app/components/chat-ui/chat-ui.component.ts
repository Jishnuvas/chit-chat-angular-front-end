import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss'],
})
export class ChatUIComponent implements OnInit {
  readonly typedText = this.message.message;
  constructor(
    private formBuilder: FormBuilder,
    private readonly message: MessagingService
  ) {}
  chatUI!: FormGroup;
  ngOnInit(): void {
    this.chatUI = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.chatUI.valid) {
      this.message.sendMessage(this.chatUI.value.message);
      this.chatUI.reset();
    }
  }
}
