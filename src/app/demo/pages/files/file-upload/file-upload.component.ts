import { Component, OnInit,VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { Router } from '@angular/router';
import { FileUploadService } from './file.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  getFile;
  getdata
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor( private router:Router,
    private fileService:FileUploadService,private toster:ToastrService) { }
  version = VERSION
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.fileService.getUsers().subscribe(data=>{
      console.log(data);
      this.getdata=data;
     this.getFile=this.getdata.users
     
      this.dtTrigger.next();
      // console.log(this.getdata.users,'userlist')
    })
  }
  addforms(){
    this.router.navigate(['/files/file-upload/load-file'])    

  }
  addform(value)
  {
    // localStorage.removeItem('setcash')

    this.router.navigate(['/files/file-upload/load-file'])    
    // this.router.navigate(['adddetails']);
  }
  // editcashinhand(value)
  // {
  //   // localStorage.setItem('setcash',JSON.stringify(value));
  //   this.router.navigate(['/files/file-upload/load-file'])    
  // }
  deleteFile(id){
    this.fileService.deletefile(id).subscribe(data=>{
      console.log(data)
      this.toster.success('added successfully');

    })
  }
 
}
