import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http:HttpClient) { }
  getCustomer(){
    return this.http.get(`${environment.apiurl }/financetrack`)
  }
  postCustomer(value){
    return this.http.post(`${environment.apiurl }/financetrack`,value)
  }
  deleteCustomer(value){
    return this.http.delete(`${environment.apiurl }/financetrack`+'/'+value._id)
  }
  putCustomer(value){
    console.log(value,'service')
     return this.http.put(`${environment.apiurl }/financetrack`+'/'+value._id,value)
  }
}

