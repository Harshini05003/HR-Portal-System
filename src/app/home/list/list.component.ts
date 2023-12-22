import { Component,Input,Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private activated:ActivatedRoute,private api:ApiService,private loader:LoaderService){}
  status:string="";
  statusArray:any=[];
  acceptArr:any=[];
  rejectArr:any=[];
  ngOnInit(){
    this.getStatusApi();
  }
  getParams(){
    this.activated.paramMap.subscribe((response)=>{
       this.status=String(response.get('status'));
       console.log(this.status);
       this.acceptFunc();
       this.rejectFunc();   
    })
  }
  getStatusApi(){
     this.loader.showLoader();
     this.api.getStatusApi().subscribe((response)=>{
           this.statusArray=response;
           this.getParams();
           this.loader.hideLoader();
     },
     (error)=>{
      this.loader.hideLoader();
      if(error.status===404)
      alert("Bad Gateway");
     })
  }
  acceptFunc(){
    this.acceptArr=this.statusArray.filter((response:any)=>{
       return response.status==="Approved";
    })
  }
  rejectFunc(){
    this.rejectArr=this.statusArray.filter((response:any)=>{
      return response.status==="Denied";
    })
  }
  loaderfunc():boolean{
     return this.loader.loaderFunc();
  }
  
}
