import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
id
  constructor(private http:HttpClient) { }

  getProduct(){
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
    return this.http.get(`${environment.apiurl }/product`+'/'+this.id)
  }
  postProduct(value){
    return this.http.post(`${environment.apiurl }/product`,value)
  }
  putProduct(value){
    return this.http.put(`${environment.apiurl }/product`+'/'+value._id,value)
  }
  deleteProduct(id){
    return this.http.delete(`${environment.apiurl }/product`+'/'+id)
  }
}
