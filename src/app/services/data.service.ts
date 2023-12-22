import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private statusUpdate = new BehaviorSubject<boolean>(false);
  statusUpdate$ = this.statusUpdate.asObservable();

  sendStatusUpdate(update: boolean) {
    this.statusUpdate.next(update);
  }
}
