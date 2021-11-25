import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../../../../environments/enviromentURL";

@Injectable({
  providedIn: 'root'
})
export class StockoutService {

  constructor( private http: HttpClient) { }
  getStock(){
    return this.http.get(`${environment.apiurl }/stockoutward`)
  }
  postStock(value){
    return this.http.post(`${environment.apiurl }/stockoutward`, value)
  }
  putStock(value){
    return this.http.put(`${environment.apiurl }/stockoutward`+'/'+value._id,value)

  }
  deleteStock(id){
    return this.http.delete(`${environment.apiurl }/stockoutward`+'/'+id)
  }
}
