import { Component,Input,Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Details, Status } from 'src/app/models/interface';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss']
})
export class RejectComponent{
constructor(private loader:LoaderService,private messageservice:MessageService,private dataService:DataService,private api:ApiService){}
@Input()
detailsArray:Details[]=[];
@Input()
statusApi:Status[]=[];
updateData={
 status:''
}
statusId:any;
updateStatusArr:any=[];
ngOnInit(){
}
idSpecificStatusFunc(idVal:any,idSpecificStatusArr:any){
  idSpecificStatusArr=this.statusApi.filter((value:any)=>{
    return value.id==idVal;
  })
}
updateStatus(arr:any){
  this.updateData.status="Requested";
}
revertStatus(id:any){
  this.statusId=id;
  this.idSpecificStatusFunc(this.statusId,this.updateStatusArr);
  this.updateStatus(this.updateStatusArr);
  this.api.putStatusApi(this.statusId,this.updateData).subscribe((response:any)=>{
    console.log("Successfully Updated");
    this.dataService.sendStatusUpdate(true);
  })
}

}
