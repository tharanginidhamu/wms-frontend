import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { BankService } from "../bankservice";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-statementform',
  templateUrl: './statementform.component.html',
  styleUrls: ['./statementform.component.scss']
})
export class StatementformComponent implements OnInit {
  statementForm:FormGroup;
  // details:FormArray;
  sale
  removeItem
  arr=[]
  transact=false
  change=0
  id
  Name
  location
  constructor(private fb:FormBuilder, private bankService:BankService,private router:Router,
    private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    let em= JSON.parse(localStorage.getItem('transact'))
    console.log(em,'emi');
    this.transact=em
   
    this.statementForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchLocation:this.location,
      branchName:this.Name,
      bankName:[''],
      bankAddress:[''],
      bankBranch:[''],
      accountHolderName:[''],
      accountNumber:[''],
      accountType:[''],
      ifscCode:[''],
      address:[''],
      details: this.fb.array([this.createItem()])
    })
    let cih=localStorage.getItem('bank');
    let ca=JSON.parse(cih);
    this.statementForm.patchValue(ca);
  }
  createItem() {
    return this.fb.group({  
    //  _id:[''],
    date:[''],
    description:[''],
    withdrawel:[''],
    deposit:[''],
    charges:[''],
    balance:[''],
    }) 
  }

  get details() {
    return this.statementForm.get('details') as FormArray;
  }


  // addItem() {
  //   this.change++;
  //   this.details = this.statementForm.get('invoice') as FormArray;
  //   this.details.push(this.createItem());
  // }
  // removeItem(index) {
  //   this.change--;
  //   this.details = this.statementForm.get('invoice') as FormArray;
  //   this.details.removeAt(index)

  // }
  onSubmit(value){
    console.log(value);
    if(value._id==''){
      this.bankService.postProduct(value).subscribe(data=>{
        console.log(data,'post');
        this.toster.success('added successfully');

      })
      localStorage.removeItem('loan')
    }
    else{
      console.log(value,'edit');
      this.bankService.putProduct(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');

      })
      localStorage.removeItem('loan')

    }
  }
  Submit(value){
    this.bankService.putProduct(value).subscribe(data=>{
      console.log(data);
      this.toster.success('added successfully');

    })
}

ubmit(value){
  this.bankService.postProduct(value).subscribe(data=>{
    console.log(data);
    this.toster.success('added successfully');

  })
}

}
