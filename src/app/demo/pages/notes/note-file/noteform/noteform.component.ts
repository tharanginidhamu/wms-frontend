import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NoteService } from "../../notes.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.scss']
})
export class NoteformComponent implements OnInit {
  notesform:FormGroup;
  temp;
  id
  Name
  location
  constructor(private fb:FormBuilder, private http:HttpClient,
    private noteService:NoteService,
    private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    this.notesform = this.fb.group({
      _id:[''],
      branchId:this.id,
      branchLocation:this.location,
       branchName:this.Name,
      date:[''],
      createdBy:[''],
      description:['']
    })
    this.temp = JSON.parse(localStorage.getItem('note'));
    console.log(this.temp);
    this.notesform.patchValue(this.temp);
  }

  onsubmit(value){

    if(value._id==''){
      this.noteService.postNotedetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');

      })
      localStorage.removeItem('setdetails')
    }
    else{
      this.noteService.putNotedetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');

      })
      localStorage.removeItem('setdetails')

    }
  }


}
