import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class HandService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
    getCashinhand(){
        return this.http.get(`${environment.apiurl }/cashhand`+'/'+this.id);
    }
    postCashinhand(value){
        return this.http.post(`${environment.apiurl }/cashhand`,value);
    }
    putCashinhand(value){
        return this.http.put(`${environment.apiurl }/cashhand`+'/'+value._id,value);
    }
    deleteCashinhand(id){
        return this.http.delete(`${environment.apiurl }/cashhand`+'/'+id);
    }
}