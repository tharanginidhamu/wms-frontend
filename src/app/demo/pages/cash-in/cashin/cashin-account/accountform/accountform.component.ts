import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.scss']
})
export class AccountformComponent implements OnInit {
  detailsForm:FormGroup
  id
  Name
  location
  constructor(private router:Router,
    private fb:FormBuilder,
    private accountService:AccountService,private toster:ToastrService ) {
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
     }

  ngOnInit() {
    this.detailsForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      accountHolderName:[''],
      accountNumber:[''],
      accountType:[''],
      bankBranch:[''],
      ifscCode:[''],
      bankName:[''],
      bankAddress:[''],
      amount:['']
    })
    
    let det=localStorage.getItem('setdetails');
    let de=JSON.parse(det);
    this.detailsForm.patchValue(de);
  }
  onsubmit(value){

    if(value._id===''){
      this.accountService.postBankdetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');
      })
      localStorage.removeItem('setdetails')
    }
    else{
      this.accountService.putBankdetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');
      })
      localStorage.removeItem('setdetails')

    }
  }


}
