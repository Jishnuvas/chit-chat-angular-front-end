import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingStateService {
  private readonly _message = new BehaviorSubject<any[]>([]);

  get message() {
    return this._message.asObservable();
  }
  setMessage(data: any) {
    if (data) {
      const messageValue = Array.from(
        JSON.parse(JSON.stringify(this._message.getValue()))
      );
      this._message.next([...messageValue, data]);
      console.log(JSON.stringify(this._message.getValue()));
    }
  }
}
