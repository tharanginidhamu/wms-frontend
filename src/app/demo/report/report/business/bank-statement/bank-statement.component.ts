import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BankService } from "./bankservice";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {
  getData;
  name
  date
  invoice
  arr=[]
  trans
  bankname
  bankaddress
  holdername
  branch
  holderaddress
  Acnum
  transaction=[]
  year=new Date()
  
  val=false;
  hide=false
  transact=false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private bankService:BankService, private toster:ToastrService) { }

  ngOnInit() {
    this.year.getFullYear()
    console.log(this.year,'year')
    this.bankService.getProduct().subscribe(data=>{
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
  setchange($event){

  }
  addform(){
    localStorage.removeItem('bank');
    localStorage.removeItem('transact')
    this.transact=false
    localStorage.setItem('transact',JSON.stringify(this.transact));
    this.router.navigate(['/report/business-status/bank-statement/form']);
  }
  show(val){
    this.val=true;
this.name=val.supplier
this.date=val.date
this.invoice=val.invoiceNo
this.arr=val.invoice
    console.log(val,'show')
  }
  back(){
this.val=false ;
 }
 check(data){
   this.trans=data
   this.bankname=data.bankName
   this.bankaddress=data.bankAddress
   this.holdername=data.accountHolderName
   this.holderaddress=data.address
   this.branch=data.branch
   this.Acnum=data.accountNumber
   this.transaction=data.details
   console.log(this.transaction,'show')
  this.hide=true ;
   }

  addTrans(value)
  {
    localStorage.removeItem('loan')
    this.transact=true
    localStorage.setItem('transact',JSON.stringify(this.transact));
    localStorage.setItem('bank',JSON.stringify(value));
    this.router.navigate(['/report/business-status/bank-statement/form']);
    // this.router.navigate(['adddetails']);
  }

  editDetail(value)
  {
    localStorage.removeItem('transact')
    localStorage.removeItem('bank')
    this.transact=false
    localStorage.setItem('transact',JSON.stringify(this.transact));
    localStorage.setItem('bank',JSON.stringify(value));
    this.router.navigate(['/report/business-status/bank-statement/form']);
  }
  delete(id){
    this.bankService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }
}
