import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class ChequeService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
    getCheque(){
        return this.http.get(`${environment.apiurl }/cheque`+'/'+this.id);
    }
    postCheque(value){
        return this.http.post(`${environment.apiurl }/cheque`,value);
    }
    putCheque(value){
        return this.http.put(`${environment.apiurl }/cheque`+'/'+value._id,value);
    }
    deleteCheque(id){
        return this.http.delete(`${environment.apiurl }/cheque`+'/'+id);
    }
}