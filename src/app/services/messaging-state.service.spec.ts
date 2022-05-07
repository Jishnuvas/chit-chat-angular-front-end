import { TestBed } from '@angular/core/testing';

import { MessagingStateService } from './messaging-state.service';

describe('MessagingStateService', () => {
  let service: MessagingStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
