import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from "../../sales/sales.service";
import { CustomerService } from "../customerhistory/customer.service";
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup ,FormControl} from "@angular/forms";
import { element } from 'protractor';


@Component({
  selector: 'app-customerhistory',
  templateUrl: './customerhistory.component.html',
  styleUrls: ['./customerhistory.component.scss']
})
export class CustomerhistoryComponent implements OnInit {
getData;
getDat
getPaid;
getaid
fdate
tdate
datefilter=[]
credit
fromdate = new FormControl();
enddate = new FormControl();
paid=[]
Apaid
balance
tap:Boolean=false
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private salesService:SalesService,
    private toster:ToastrService,private customerservice:CustomerService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.salesService.getInvProduct().subscribe(data=>{
      // data.overAllInvoiceTotal= data.overAllInvoiceTotal.tofixed(2) 
      this.getData=data;
      this.datefilter=this.getData
      this.getData.forEach(dataa=>{
        
      //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
 
       })
      //  this.getaid=filter
      this.dtTrigger.next();

      console.log(this.getData,'sale credit')
      this.getData.forEach(dataa=>{
       this.getPaid=dataa.paid;
       this.getPaid.forEach(val=>{
         let zero =0;
         console.log(val.amountPaid+zero)
       })
      })
    })
  this.customerservice.getCustomer().subscribe(data=>{
    this.getDat=data;
    console.log(this.getDat,'cust')
  })
  }

  update(data){
    var value=data
    localStorage.removeItem('sale')
    localStorage.setItem('sale',JSON.stringify(value))
    this.router.navigate(['/finance/customerhistory/history'])
  }
  from(event){
    this.fdate=event
    console.log(event,'fromdate')
  
  }
  to(event){
    this.tdate=event
    console.log(event,'fromdate')
   this.Date();
  }
 Date() {
  let start = "2020-11-01";
  let end = "2020-11-30";
  
  var startDate = new Date( this.fdate);
  var endDate = new Date( this.tdate);

  var resultProductData = this.getData.filter(function(a) {
    return new Date(a.date) >= startDate && new Date(a.date) <= endDate
  });
   this.datefilter=resultProductData
var filter=resultProductData
this.credit=0
this.Apaid=0
this.balance=0
this.paid=[]
filter.forEach(element => { 
  element.paid.forEach(ele => {
    this.paid.push({amount:ele.amountPaid})
  });
  var  bal=element.balance
  this.balance=this.balance+Number.parseFloat(bal)

 var mp= element.credit
 this.credit=this.credit+Number.parseFloat(mp)
});
this.paid.forEach(mint => {
  var mp= mint.amount
this.Apaid=this.Apaid+Number.parseFloat(mp)

});
this.tap=true
  console.log(resultProductData,'selected data');
  }
}
