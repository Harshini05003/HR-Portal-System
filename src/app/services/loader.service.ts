import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loader:boolean=true;
  showLoader(){
    this.loader=true;
  }
  hideLoader(){
    this.loader=false;
  }
  loaderFunc(){
    return this.loader;
  }
}
