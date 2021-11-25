import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from "../../../../pages/sales/sales.service";
import { CustomerService } from "../../../../pages/finance/customerhistory/customer.service";
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.scss']
})
export class AllTransactionComponent implements OnInit {
  getData;
  getDat
  getPaid;
  sss
  pro
  getaid
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 
  isDtInitialized:boolean = false
  constructor(private router: Router, 
    private salesService:SalesService,
    private customerservice:CustomerService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.salesService.getInvProduct().subscribe(data=>{
      // data.overAllInvoiceTotal= data.overAllInvoiceTotal.tofixed(2) 
      this.getData=data;
      // this.dtTrigger.next();
      this.getData.forEach(dataa=>{
        
      //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
 
       })
      //  this.getaid=filter
      // this.dtTrigger.next();

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
  setchange(selectedvalue) {
    this.sss = selectedvalue;
    const emp = [this.sss];
   
  const filteredArray = this.getData.filter(function(itm) {
    return emp.indexOf(itm.crmonth) > -1;
        });
  this.pro = filteredArray;
  
  if (this.isDtInitialized) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  } else {
    this.isDtInitialized = true
    this.dtTrigger.next();
  }
    //  var currentMonth = 5
    //  var currentYear = 2020
    
    //Get the year and month from the iterated date
    // var [year, month] = e.date.split('-');
    
    //Then filter the dates
  //  var events =  this.getData.filter(e => {
  //       var [month,year] = e.monthyear.split('-'); // Or, var month = e.date.split('-')[1];
  //       return emp.indexOf(currentMonth == month) && (currentYear == year);
  //   });
  
    console.log(this.pro,'month and year')
    
  
  }
  

}
