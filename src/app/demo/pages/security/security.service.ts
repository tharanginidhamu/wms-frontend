import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class secureService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
    postsecurity(val) {
    
      return this.http.post(`${environment.apiurl }/security`,val)
    }
    getsecurity(bid) {   
      return this.http.get(`${environment.apiurl }/security`+'/'+bid)
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