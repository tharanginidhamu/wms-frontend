import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import {environment  } from "../../../../environments/enviromentURL";
import { environment } from "../../../../environments/enviromentURL";

import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private http:HttpClient) { }

  getDivision(){
    return this.http.get(`${environment.apiurl }/division`)
  }
  getRack(){
    return this.http.get(`${environment.apiurl }/rack`)
  }
  
  postDivision(value){
    return this.http.post(`${environment.apiurl }/division`,value)
  }
  postRack(value){
    return this.http.post(`${environment.apiurl }/rack`,value)
  }
  putDivision(value){
    return this.http.put(`${environment.apiurl }/division`+'/'+value._id,value)
 
  }
}
