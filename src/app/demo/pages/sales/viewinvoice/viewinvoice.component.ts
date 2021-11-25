import { Component, OnInit,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

import { RouterModule, Router } from '@angular/router';
import { SalesService } from "../sales.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.scss']
})
export class ViewinvoiceComponent implements OnInit {
getData;
bill=[]
values=[]
totalAM
allcgst
allsgst
forBill=true
table=false
product=[]
sss
mname
pro
id
  Name
  location
SaleForm: FormGroup;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private fb:FormBuilder,private router:Router, private billingService:SalesService, private toster:ToastrService) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
   }

  ngOnInit() {
    this.billingService.getInvProduct().subscribe(data=>{
      this.getData=data;
      console.log(this.getData)
      this.getData.forEach(data=>{
        data.products.forEach(dat=>{
        this.product.push(dat)
         
        })
       
      })
      console.log(this.product,'arrayproduct')
   
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
  invoiceform()
  {
    localStorage.removeItem('sup')
    this.router.navigate(['/saless/viewinvoice/invoiceform'])
  }
  updatearr(data){
    localStorage.removeItem('invoice')
    localStorage.setItem('invoice',JSON.stringify(data))
    this.router.navigate(['/saless/viewinvoice/invoiceform'])
   
  }
  show(data){
    this.values=[]
    this.forBill=false
    this.table=true
// this.totalAM=data.overAllInvoiceAmount
// this.allcgst=data.overAllCGSTUnit
// this.allsgst=data.overAllSGSTUnit
 this.values.push(data)
   this.bill=data.products
   console.log(data,'bill')
  }
  delete(data){
    this.billingService.deleteInvProduct(data).subscribe(data=>{
      console.log(data,'delete')
      this.toster.success('deleted successfully');

    })
  }
  back(){
    this.forBill=true;
    this.table=false
  }

}
