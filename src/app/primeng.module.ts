import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { FullViewComponent } from './home/full-view/full-view.component';
import { ListComponent } from "./home/list/list.component";
import { AcceptComponent } from "./home/list/accept/accept.component";
import { RejectComponent } from "./home/list/reject/reject.component";
@NgModule({
  declarations:[
    HomeComponent,
    FullViewComponent,
    ListComponent,
    AcceptComponent,
    RejectComponent,
  ],
  imports:[
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToastModule,
    ProgressBarModule,
    MenuModule,
    DialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, 
  ]
})
export class PrimengModule{

}