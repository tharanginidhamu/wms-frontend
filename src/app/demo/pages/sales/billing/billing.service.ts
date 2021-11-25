import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class BillingService {
  id

  constructor(private http:HttpClient) { }
  getProduct(){
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
    return this.http.get(`${environment.apiurl }/billing`+'/'+this.id)
  }
  postProduct(value){
    return this.http.post(`${environment.apiurl }/billing`,value) 
  }
  deleteProduct(id){
    return this.http.delete(`${environment.apiurl }/billing`+'/'+id)
  }
  putProduct(value){
    return this.http.put(`${environment.apiurl }/billing`+'/'+value._id,value)
  } 
}
