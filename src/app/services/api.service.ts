import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../models/urls';
import { Observable } from 'rxjs';
import { Details, Status } from '../models/interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getApi():Observable<Details>{
    return this.http.get<Details>(urls.dataApi);
  }
  getStatusApi():Observable<Status>{
    return this.http.get<Status>(urls.statusApi);
  }
  putStatusApi(id: any, data: any):Observable<Status> {
    return this.http.put<Status>(`${urls.statusApi}/${id}`, data);
  }
  
}
