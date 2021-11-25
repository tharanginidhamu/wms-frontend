import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../../../environments/enviromentURL";

@Injectable({
  providedIn: 'root'
})
export class SalesService {
id
  constructor(private http:HttpClient) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
   }
  private _refreshNeeded$=new Subject<void>();
  get refreshNeeded$(){
    return this._refreshNeeded$;
  }
  getProduct(){
    return this.http.get(`${environment.apiurl }/sales`)
  }
  postProduct(value){
    return this.http.post(`${environment.apiurl }/sales`,value)
  }
  deleteProduct(id){
    return this.http.delete(`${environment.apiurl }/sales`+'/'+id)
  }
  putProduct(value){
    return this.http.put(`${environment.apiurl }/sales`+'/'+value._id,value)
  }
  getInvProduct(){
    return this.http.get(`${environment.apiurl }/billing`+'/'+this.id)
  }
  postInvProduct(value){
    return this.http.post(`${environment.apiurl }/billing`,value) 
     .pipe( tap(()=>{
      this._refreshNeeded$.next();
    }))
  }
  deleteInvProduct(id){
    return this.http.delete(`${environment.apiurl }/billing`+'/'+id)
  }
  putInvProduct(value){
    return this.http.put(`${environment.apiurl }/billing`+'/'+value._id,value)
    .pipe( tap(()=>{
      this._refreshNeeded$.next();
    }))
  } 
}
