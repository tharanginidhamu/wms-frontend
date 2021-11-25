import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {ReceiveService  } from '../receive.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receiv-form',
  templateUrl: './receiv-form.component.html',
  styleUrls: ['./receiv-form.component.scss']
})
export class ReceivFormComponent implements OnInit {
  value;
  temp;
  discrepancy:FormArray
  addForm: FormGroup;
  id
  Name
  location
  constructor(private fb: FormBuilder, private router: Router, private addreceiveService:ReceiveService,
    private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    this.addForm = this.fb.group({

      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      itemCode:[''],
      reciptno:[''],
      date:[''],
      description:[''],
      cgst:[''],
      sgst:[''],
      quantity:[''],
      vom:[''], 
      price:[''],
      selected:false
      
    })

    var local = localStorage.getItem('arf');
    this.addForm.patchValue(JSON.parse(local))
  }

  postpc(value){
    console.log(value)
   this.addreceiveService.postProduct(value).subscribe(data=>{
     console.log(data)
     this.toster.success('added successfully');
   })
  //  this.router.navigate(['/receiving/rf'])

  }

}
