import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { scheduleStatus } from '../classes/status';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  result: any;
  home_route = 'http://10.10.4.61:8081/status';
  constructor(private http: HttpClient) { }

  getData(hom_route,route,input): Observable<any>{
    // let param1 = new HttpParams().set(param_name,data);
    // this.api_call = this.home_route + route;
    return this.http.get(this.home_route + route,{params: input})
  }
  
  getAllData(): Observable<any>{
    // this.api_call = this.home_route + route;
    return this.http.get(this.home_route)
  }

}