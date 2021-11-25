import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
id
  constructor(private http:HttpClient) { }

   getSupplier(){
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
     return this.http.get(`${environment.apiurl }/suppliers`+'/'+this.id)
   }
   postSuppliers(value){
     return this.http.post(`${environment.apiurl }/suppliers`,value)
   }
   putSuppliers(value){
     return this.http.put(`${environment.apiurl }/suppliers`+'/'+value._id,value)
   }
   delete(id){
     return this.http.delete(`${environment.apiurl }/suppliers`+'/'+id)
   }
}
