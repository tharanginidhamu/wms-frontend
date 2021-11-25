import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { BankService } from '../loan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bankform',
  templateUrl: './bankform.component.html',
  styleUrls: ['./bankform.component.scss']
})
export class BankformComponent implements OnInit {
  loanForm:FormGroup
  emiForm:FormGroup
  emi=false;
  id
  Name
  location
  constructor(private router:Router,
    private loanService:BankService,
    private fb:FormBuilder,  private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    let em= JSON.parse(localStorage.getItem('emi'))
    console.log(em,'emi');
    this.emi=em
    // let em=localStorage.getItem('emi');

    // let ca=JSON.parse(cih);

    this.loanForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchLocation:this.location,
       branchName:this.Name,
      date:[''],
      bankName:[''],
      accountHolderName:[''],
      accountNumber:[''],
      ifscCode:[''],
     
     bankBranch:[''],
      loanType:[''],
      loanPeriod:[''],
      loanAmount:[''],
      paid:this.fb.array([this.create()])
    })
    let cih=localStorage.getItem('loan');
    let ca=JSON.parse(cih);
    this.loanForm.patchValue(ca);
  }
  create(){
    return this.fb.group({  
      //  _id:[''],
      date:[''],
      emi:[''],
      }) 
      }

      get paid() {
        return this.loanForm.get('paid') as FormArray;
      }
  onSubmit(value){
    if(value._id==''){
      this.loanService.postBankdetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');

      })
      localStorage.removeItem('loan')
    }
    else{
      this.loanService.putBankdetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');

      })
      localStorage.removeItem('loan')

    }
  }
  Submit(value){
      this.loanService.putBankdetails(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');

      })
  }
 

}
