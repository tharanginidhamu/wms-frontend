import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HandService } from '../hand.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-handform',
  templateUrl: './handform.component.html',
  styleUrls: ['./handform.component.scss']
})
export class HandformComponent implements OnInit {
  id
  Name
  location
  cashForm:FormGroup
  constructor(private router:Router,
    private fb:FormBuilder,
    private handService:HandService,
    private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    this.cashForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      date:[''],
      cash:[''],
      source:['']
    })
    let cih=localStorage.getItem('setcash');
    let ca=JSON.parse(cih);
    this.cashForm.patchValue(ca);
  }
  onSubmit(value){
    if(value._id==''){
      this.handService.postCashinhand(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');

      })
      localStorage.removeItem('setcash')

    }
    else{
      this.handService.putCashinhand(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');

      })
      localStorage.removeItem('setcash')

    }
  }

}
