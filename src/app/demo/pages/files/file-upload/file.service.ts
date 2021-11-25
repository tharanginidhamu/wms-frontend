import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class FileUploadService{

  baseURL = environment.apiurl ;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
id
  constructor(private http: HttpClient) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
    });
   }

  // Get Users
  getUsers() {
    return this.http.get(`${environment.apiurl }/file`)
  }

  // Create User
  addUser(date: string,fileName: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("date", date);
    formData.append("fileName", fileName);
    // formData.append("branchId", branchId);
    // formData.append("branchLocation", branchLocation);
    // formData.append(" branchName",  branchName);
    formData.append("avatar", profileImage);
    console.log(formData,'in service file'); 
    return this.http.post(`${this.baseURL}/file`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage); 
    return throwError(errorMessage);
  }
  deletefile(id){
    return this.http.delete(`${environment.apiurl }/file`+'/'+id);
}
}