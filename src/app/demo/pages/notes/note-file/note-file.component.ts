import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NoteService } from "../notes.service";
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-note-file',
  templateUrl: './note-file.component.html',
  styleUrls: ['./note-file.component.scss']
})
export class NoteFileComponent implements OnInit {
  temp;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private http:HttpClient,
    private noteService:NoteService,private toster:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.noteService.getNotedetails().subscribe(data=>{
      console.log(data);
      this.temp=data;
      this.dtTrigger.next();
    })
  }
  addforms(){
    localStorage.removeItem('note')
    this.router.navigate(['/notes/note/noteform']) 

  }
  addform(value)
  {
    localStorage.removeItem('note')
    this.router.navigate(['/notes/note/noteform']) 
    // this.router.navigate(['adddetails']);
  }
  editnote(value)
  {
    localStorage.removeItem('note')
    localStorage.setItem('note',JSON.stringify(value));
    this.router.navigate(['/notes/note/noteform']) 
  }
  delnote(id){
    this.noteService.deleteNotedetails(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
