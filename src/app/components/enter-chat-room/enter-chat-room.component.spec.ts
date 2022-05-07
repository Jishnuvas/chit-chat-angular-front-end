import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterChatRoomComponent } from './enter-chat-room.component';

describe('EnterChatRoomComponent', () => {
  let component: EnterChatRoomComponent;
  let fixture: ComponentFixture<EnterChatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterChatRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
