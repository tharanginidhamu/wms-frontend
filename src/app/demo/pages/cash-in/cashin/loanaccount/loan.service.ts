import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class BankService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
    getBankdetails(){
        return this.http.get(`${environment.apiurl }/bankloan`+'/'+this.id);
    }
    postBankdetails(value){
        return this.http.post(`${environment.apiurl }/bankloan`,value);
    }
    putBankdetails(value){
        return this.http.put(`${environment.apiurl }/bankloan`+'/'+value._id,value);
    }
    deleteBankdetails(id){
        return this.http.delete(`${environment.apiurl }/bankloan`+'/'+id);
    }
}