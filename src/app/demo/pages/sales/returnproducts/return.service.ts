import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class ReturnService {
id
  constructor( private http:HttpClient) { 
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
  }

  getReturn(){
    return this.http.get(`${environment.apiurl }/returnproduct`+'/'+this.id)
  }
  postReturn(value){
    return this.http.post(`${environment.apiurl }/returnproduct`, value)
  }
  putReturn(value){
    return this.http.put(`${environment.apiurl }/returnproduct`+'/'+value._id,value)
  }
  deleteReturn(id){
    return this.http.delete(`${environment.apiurl }/returnproduct`+'/'+id)
  }
}
