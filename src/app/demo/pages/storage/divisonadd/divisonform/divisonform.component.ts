import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {  StorageService} from "../../storage.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-divisonform',
  templateUrl: './divisonform.component.html',
  styleUrls: ['./divisonform.component.scss']
})
export class DivisonformComponent implements OnInit {
  value;
  temp;
  discrepancy:FormArray

  constructor(private fb: FormBuilder, private router: Router,private storageservice: StorageService,  private toster:ToastrService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.fb.group({
      _id:[''],
      division:[''],
      rack:[''],
      quantity:[''],
      used:0,
      avalible:[''],
      selected:false
     
      
    })

    var local = localStorage.getItem('divi');
    this.addForm.patchValue(JSON.parse(local))

  }
  postpc(value){
    var quan=value.quantity
    value.avalible=quan
    if(value._id ==''){
      this.storageservice.postDivision (value).subscribe(data=>{
        console.log(data,'add')
        this.toster.success('added successfully');

      })
    }else{
      this.storageservice.putDivision(value).subscribe(data=>{
        console.log(data)
        this.toster.success('edit successfully');

      })
    }
  
  }


}
