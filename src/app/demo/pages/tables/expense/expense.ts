import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RouterModule, Router } from '@angular/router';
 import { ExpenseService } from "./expense.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tbl-bootstrap',
  templateUrl: './expense.html',
  styleUrls: ['./expense.scss']
})
export class ExpenseComponent implements OnInit {
  getData;
  name
  date
  invoice
  arr=[]
  value=true
  myform:FormGroup; 

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router,private expenseService:ExpenseService,private fb:FormBuilder,
    private toster:ToastrService) { }

  ngOnInit() {
   
    this.expenseService.getData().subscribe(data=>{
      this.getData=data;
      console.log(this.getData)
      this.dtTrigger.next();
     })
     this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 10
     };
   
   
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  addform(){
    localStorage.removeItem('expense')
    this.router.navigate(['/tables/expensive/expenseform'])    

  }
  show(val){
this.name=val.supplier
this.date=val.date
this.invoice=val.invoiceNo
this.arr=val.invoice
    // console.log(val,'show')
  }
  Delete(id){
    this.expenseService.deleteData(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

  edit(val){
    localStorage.removeItem('expense')
    localStorage.setItem('expense',JSON.stringify(val))
    this.router.navigate(['/tables/expensive/expenseform'])    
  }
}
