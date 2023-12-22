import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  visible:boolean=true;
  showDialog():boolean{
   return this.visible;
  }
}
