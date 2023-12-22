import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService:MessageService) { }
  toaster$=new Subject<string>();
  showSuccessToaster(){
    return this.messageService.add(
      { severity: 'success', summary: 'Success', detail: 'Approved Successfully' }
    );
  }
  showErrorToaster(){
    return this.messageService.add(
      { severity: 'error', summary: 'Denied', detail: 'Denied Successfully' }
    );
  }
  
}
