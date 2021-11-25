import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../../../../../environments/enviromentURL";

@Injectable({
  providedIn: 'root'
})
export class BankService {
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
    return this.http.get(`${environment.apiurl }/bankstatement`+'/'+this.id)
  }
  postProduct(value){
    return this.http.post(`${environment.apiurl }/bankstatement`,value)
  }
  deleteProduct(id){
    return this.http.delete(`${environment.apiurl }/bankstatement`+'/'+id)
  }
  putProduct(value){
    return this.http.put(`${environment.apiurl }/bankstatement`+'/'+value._id,value)
  }
//   getInvProduct(){
//     return this.http.get('http://localhost:3350/billing')
//   }
//   postInvProduct(value){
//     return this.http.post('http://localhost:3350/billing',value) 
//      .pipe( tap(()=>{
//       this._refreshNeeded$.next();
//     }))
//   }
//   deleteInvProduct(id){
//     return this.http.delete('http://localhost:3350/billing'+'/'+id)
//   }
//   putInvProduct(value){
//     return this.http.put('http://localhost:3350/billing'+'/'+value._id,value)
//     .pipe( tap(()=>{
//       this._refreshNeeded$.next();
//     }))
//   } 
 }
