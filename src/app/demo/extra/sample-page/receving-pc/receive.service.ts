import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class ReceiveService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
   
    getProduct(){
        return this.http.get(`${environment.apiurl }/receiverf`+'/'+this.id)
        }
        postProduct(value){
        return this.http.post(`${environment.apiurl }/receiverf`,value)
        }
        putProduct(value){
        return this.http.put(`${environment.apiurl }/receiverf`+'/'+value._id,value)
        }
        deleteProduct(id){
        return this.http.delete(`${environment.apiurl }/receiverf`+'/'+id)
        }
}