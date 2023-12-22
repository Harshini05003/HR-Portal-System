import { Component,EventEmitter,Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { icons } from 'src/app/models/icons';
import { Details, Status } from 'src/app/models/interface';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService } from 'src/app/services/toaster.service';
@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent {
  constructor(private messageService: MessageService,private statusApi:ApiService,private dataservice:DataService,private loader:LoaderService,private toaster:ToasterService) {}
  @Input()detailsArray:any=[];
  @Output()eventEmit=new EventEmitter();
  @Input()statusArray:Status[]=[];
  togglerHome:boolean=false;
  id:any;
  tableHeadArray:any=[
    "Name","Gender","Educational Qualification","Place","DOB","Age","Designation","Experience","Technologies Known","MailId","Phone No.","Cover Letter"
  ];
  tableKeyArray:any=[
    "name","gender","edu","place","dob","age","designation","experience","tech","mailId","phone","coverLetter"
  ]
  icons=icons;
  postData={
    status:''
  }
  ngOnInit(){
   this.setId();
  }
  setId(){
    this.id=this.detailsArray[0].id
  }
  putstatusFunc(){
    this.statusApi.putStatusApi(this.id,this.postData).subscribe((response)=>{
      this.dataservice.sendStatusUpdate(true); 
      // console.log("Successfully Updated");
    })
  }
  showAcceptance() {
      this.postData.status="Approved";
      this.putstatusFunc();
      this.toaster.toaster$.next('approve');
      this.toggleHome();
  }
  showRejection(){
    this.postData.status="Denied";
    this.putstatusFunc();
    this.toaster.toaster$.next('deny');
    this.toggleHome();
  }
  toggleHome(){
     this.eventEmit.emit(this.togglerHome);
  }

}
