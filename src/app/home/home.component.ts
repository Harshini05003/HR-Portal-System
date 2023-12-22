import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FullViewComponent } from './full-view/full-view.component';
import { DataService } from '../services/data.service';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { MessageService,MenuItem } from 'primeng/api';
import { urls } from '../models/urls';
import { icons } from '../models/icons';
import * as moment from 'moment';
import { ToasterService } from '../services/toaster.service';
import { messages } from '../models/messages';
import { DialogService } from '../services/dialog.service';
import { Details, Status } from '../models/interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private api:ApiService,private dataService: DataService,private loader:LoaderService,private messageservice:MessageService,private toaster:ToasterService,private dialog:DialogService){
  }
  accept:string="accept";
  reject:string="reject";
  items: MenuItem[] | undefined;
  dataApiArray:Details[]=[];
  toggleCard:any=false;
  statusApi:Status[]=[];
  id:any;
  idSpecificArr:any=[];
  idSpecificStatusArr:any=[];
  statusId:any;
  loaderValue:boolean=false;
  icon=icons;
  msg=messages;
  nameSortArr:any=[];
  dobSortArr:any=[];
  ageSortArr:any=[];
  expSortArr:any=[];
  statusReq:any=[];
  dateSortArr:any=[];
  visible:boolean=false;
  ngOnInit(){
   this.getApiService();
   this.getStatusApi();
   this.toasterFunc();
   this.updateDataService(); 
   this.sortMenu();
  }
  toasterFunc(){
    this.toaster.toaster$.subscribe((response)=>{
      if(response==='approve'){
      this.toaster.showSuccessToaster();
      this.toaster.toaster$.next('null');
      }
      else if(response==='deny'){
      this.toaster.showErrorToaster();
      this.toaster.toaster$.next('null');
    }
    })
  }
  updateDataService(){
    this.dataService.statusUpdate$.subscribe((update: boolean) => {
      if (update) {
        this.getStatusApi(); 
      }
    });
  }
  getApiService(){
    this.loader.showLoader();
    this.api.getApi().subscribe((response:any)=>{
      this.dataApiArray=response; 
      this.loader.hideLoader(); 
    },
    (error)=>{
      console.log(error);
      this.loader.hideLoader(); 
       if(error.status===404)
       this.visible=this.dialog.showDialog();
    })
  }
  getStatusApi(){
    this.loader.showLoader();
    this.api.getStatusApi().subscribe((response:any)=>{
      this.statusApi=response;
      this.loader.hideLoader(); 

    },
    (error)=>{
      console.log(error);
      this.loader.hideLoader(); 
       if(error.status===404)
       alert("Bad Gateway");
    })
  }
  cardClick(id:any){
    this.toggleCard=!this.toggleCard;
    this.id=id;
    this.idSpecificArrFunc();
    this.idSpecificStatusArr=this.statusApi.filter((value:any)=>{
      return value.id==this.id;
    })
  }
  idSpecificArrFunc(){
    this.idSpecificArr=this.dataApiArray.filter((value:any)=>{
      return value.id==this.id;
   })
  }
  loaderfunc():boolean{
    return this.loader.loaderFunc();
  }

  nameSort(){
   this.nameSortArr=this.dataApiArray.sort((a:any,b:any)=>{
    return a.name.localeCompare(b.name);
   })
   this.sortAssign(this.nameSortArr);
  }
  dobSort(){
    this.dobSortArr=this.dataApiArray.sort((a:any,b:any)=>{
      return a.dob.localeCompare(b.dob);
     })
     this.sortAssign(this.dobSortArr);
  }
  ageSort(){
    this.ageSortArr=this.dataApiArray.sort((a:any,b:any)=>{
      return b.age-a.age;
    })
    this.sortAssign(this.ageSortArr)
  }
  expSort(){
    this.expSortArr=this.dataApiArray.sort((a:any,b:any)=>{
      return b.experience-a.experience;
    })
    this.sortAssign(this.expSortArr)
  }
  dateSort(){
    this.dateSortArr=this.dataApiArray.sort((a:any,b:any)=>{
      return b.dateApply-a.dateApply;
    })
    this.sortAssign(this.dateSortArr)
  }
  sortAssign(arr:any){
    this.dataApiArray=arr;
  }
  sortMenu(){
    this.items = [
      {
          label: 'Options',
          items: [
              {
                  label: 'Name',
                  icon: this.icon.user,
                  command: () => {
                      this.nameSort();
                  }
              },
              {
                label: 'Age',
                icon: this.icon.user,
                command: () => {
                    this.ageSort();
                }
              },
              {
                label: 'Experience',
                icon: this.icon.user,
                command: () => {
                    this.expSort();
                }
              },
              {
                label: 'Applied Date',
                icon: this.icon.user,
                command: ()=>{
                  this.dateSort();
                }
              }
          ]
      }]
  }
  dateConversion(data:any){
    let date=new Date(data);
    let dateMoment=moment(date).format('DD.MM.yyyy');
    return dateMoment;
  }
}
