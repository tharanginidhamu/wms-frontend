import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RouterModule, Router } from '@angular/router';
 import { ExpenseService } from "../expense.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrls: ['./expenseform.component.scss']
})
export class ExpenseformComponent implements OnInit {
  getData;
  name
  date
  invoice
  arr=[]
  value=true
  expense
  myform:FormGroup; 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id
  Name
  location

  constructor(private router: Router,private expenseService:ExpenseService,private fb:FormBuilder,private toster:ToastrService) { 
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
  }

  ngOnInit() {
    this.expense=JSON.parse(localStorage.getItem('expense'))
    this.arr.push(this.expense)
   
     
    this.myform=this.fb.group({
      _id: [''],
      branchId:this.id,
      branchLocation:this.location,
       branchName:this.Name,
      date : [''],
      client : [''],
      transportation : [''],
      // amount : [''],
      foodutility : [''],
      rental : [''],
      health : [''],
      electricity : [''],
      laboursal : [''],
      others : ['']
    }) 
       this.update(this.expense);
  }

  onsubmit(val){
    if (val._id=='') {
     
      
      this.expenseService.postData(val).subscribe(data=>{
        console.log(data)
        this.toster.success('updated successfully');

       })
      //  location.reload()
    } else {
      this.expenseService.putData(val).subscribe(data=>{
        console.log(data)
        this.toster.success('updated successfully');

       })
      //  location.reload()

      
    }
   
   console.log(this.myform.value)
}
update(value){
  this.myform.patchValue(value)
 
     }

}
