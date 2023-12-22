import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  log:boolean=false;
  login(){
    this.log=true;
  }
  logout(){
    this.log=false;
  }
  logFunc(){
    return this.log;
  }
}
