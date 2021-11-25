import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
  providedIn: 'root'
})
export class StockavaService {

  constructor( private http: HttpClient) { }

  getStock(){
    return this.http.get(`${environment.apiurl }/stockavailability`)
  }
  postStock(value){
    return this.http.post(`${environment.apiurl }/stockavailability`, value)
  }
  putStock(value){
    return this.http.put(`${environment.apiurl }/stockavailability`+'/'+value._id,value)

  }
  deleteStock(id){
    return this.http.delete(`${environment.apiurl }/stockavailability`+'/'+id)
  }
}
