import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FullViewComponent } from './home/full-view/full-view.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ListComponent } from './home/list/list.component';
import { AcceptComponent } from './home/list/accept/accept.component';
import { RejectComponent } from './home/list/reject/reject.component';
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
