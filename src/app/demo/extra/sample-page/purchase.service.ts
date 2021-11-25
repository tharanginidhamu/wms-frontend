import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {  
auth
id
  constructor(private http:HttpClient) {
    this.auth=[{ 
      branchId:'branch001',
      branchName:'A',
      branchLocation:'Guindy'
    }]
    localStorage.setItem('user', JSON.stringify(this.auth))
    // JSON.stringify(localStorage.setItem('User',this.auth))
   }

  getPurchaseData(){
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
    return this.http.get(`${environment.apiurl }/purchase`+'/'+this.id)
  }
  postPurchaseData(value){
    return this.http.post(`${environment.apiurl }/purchase`,value)
  }
  putPurchaseData(value){
    return this.http.put(`${environment.apiurl }/purchase`+'/'+value._id,value)
  }
  deletePurchaseData(id){
    return this.http.delete(`${environment.apiurl }/purchase`+'/'+id)
  }
  getData(){
  var us = JSON.parse( localStorage.getItem('user'))
  us.forEach(element => {
    this.id=element.branchId
  });
    
    console.log(this.id,us,'id')
    return this.http.get(`${environment.apiurl }/oursuppliers`+'/'+this.id)
  }
  postData(value){
    return this.http.post(`${environment.apiurl }/oursuppliers`,value)
  }
  putData(value){
    return this.http.put(`${environment.apiurl }/oursuppliers`+'/'+value._id,value)
  }
  deletePData(id){
    return this.http.delete(`${environment.apiurl }/oursuppliers`+'/'+id)
  }
}
