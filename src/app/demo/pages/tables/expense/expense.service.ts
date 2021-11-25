import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/enviromentURL";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {  
id
  constructor(private http:HttpClient) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
   }

  getData(){
    return this.http.get(`${environment.apiurl }/expense`+'/'+this.id)
  }
  postData(value){
    return this.http.post(`${environment.apiurl }/expense`,value)
  }
  putData(value){
    return this.http.put(`${environment.apiurl }/expense`+'/'+value._id,value)
  }
  deleteData(id){
    return this.http.delete(`${environment.apiurl }/expense`+'/'+id)
  }
  postsecurity(val) {
    
    return this.http.post(`${environment.apiurl }/security`,val)
  }
  getsecurity() {   
    return this.http.get(`${environment.apiurl }/security`+'/'+this.id)
  }
  getsec(val) {   
    return this.http.get(`${environment.apiurl }/secu`+'/'+val)
  }
  getloading(bid,type) {   
    return this.http.get(`${environment.apiurl }/security/`+bid+'/'+type)
  }
  
deletesecurity(id){
  return this.http.delete(`${environment.apiurl }/security`+'/'+id);
}
editsecurity(val){
  return this.http.put(`${environment.apiurl }/security`+'/'+val._id,val);
}
}
