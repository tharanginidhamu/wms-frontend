import { Component, OnInit,VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEvent , HttpEventType} from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { FileUploadService} from '../file.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fileform',
  templateUrl: './fileform.component.html',
  styleUrls: ['./fileform.component.scss']
})
export class FileformComponent implements OnInit {
  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  id
  Name
  location
  constructor( private http: HttpClient,
    private fb:FormBuilder,
    private fileservice : FileUploadService,
    public router: Router,private toster:ToastrService) {
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
     }
  // version = VERSION
  // fileForm:FormGroup
  public progress: number;
  ngOnInit() {

    this.form = this.fb.group({
      branchId:this.id,
      branchLocation:this.location,
       branchName:this.Name,
      date: [''],
      fileName: [''],
      avatar: [null]
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submitForm(value) {
    this.fileservice.addUser(
      // this.form.value.branchId,
      // this.form.value.branchLocation,
      // this.form.value. branchName,
      this.form.value.date,
      this.form.value.fileName,
      this.form.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.toster.success('added successfully');

          this.percentDone = false;
          this.router.navigate(['/files/file-upload'])   
      }
    })

  }

}
