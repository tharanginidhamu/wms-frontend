import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/enviromentURL";
@Injectable({
    providedIn:'root'
})
export class NoteService{
    id
    constructor(private http:HttpClient){
        var us = JSON.parse( localStorage.getItem('user'))
        us.forEach(element => {
          this.id=element.branchId
        });
    }
    getNotedetails(){
        return this.http.get(`${environment.apiurl }/notes`+'/'+this.id);
    }
    postNotedetails(value){
        return this.http.post(`${environment.apiurl }/notes`,value);
    }
    putNotedetails(value){
        return this.http.put(`${environment.apiurl }/notes`+'/'+value._id,value);
    }
    deleteNotedetails(id){
        return this.http.delete(`${environment.apiurl }/notes`+'/'+id);
    }
}