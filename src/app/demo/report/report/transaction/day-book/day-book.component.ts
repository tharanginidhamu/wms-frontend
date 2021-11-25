import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from "../../../../pages/sales/sales.service";
import { CustomerService } from "../../../../pages/finance/customerhistory/customer.service";
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";
import { FormBuilder, FormGroup ,FormControl} from "@angular/forms";

@Component({
  selector: 'app-day-book',
  templateUrl: './day-book.component.html',
  styleUrls: ['./day-book.component.scss']
})
export class DayBookComponent implements OnInit {
  getData;
  getDat
  getPaid;
  getaid
  arr=[]
  paidval
  array=[]
  Excel=[]
  checklist=[]
  cati=[]
  category=[]
  gory=[]
  catigorydivision=[]
  selected:any;
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
    private toster:ToastrService,private customerservice:CustomerService,private excelService:ExcelService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.salesService.getInvProduct().subscribe(data=>{
      // data.overAllInvoiceTotal= data.overAllInvoiceTotal.tofixed(2) 
      this.getData=data;
      this.getData.forEach(dataa=>{
        
      //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
 
       })
      //  this.getaid=filter
      this.dtTrigger.next();

      console.log(this.getData,'sale credit')
      this.getData.forEach(dataa=>{
        var count=0
        dataa.paid.forEach(ele => {
          count=count + parseInt(ele.amountPaid) 
        });
     this.array.push( { Date:dataa.date, Name:dataa.name, Invoice:dataa.overAllInvoiceAmount, 
       Credit:dataa.credit, Paid:count, Balance:dataa.balance })
       this.getPaid=dataa.paid;
       this.getPaid.forEach(val=>{
         let zero =0;
         console.log(val.amountPaid+zero)
       })
      })
    })
  this.customerservice.getCustomer().subscribe(data=>{
    this.getDat=data;
    console.log(this.getDat,'getfa')
 this.getDat.forEach(element => {
   var count=0
//    element.paid.forEach(ele => {
//      count=count + ele.amountPaid
//    });
// this.array.push( { Date:element.date, Name:element.name, Invoice:element.overAllInvoiceAmount, 
//   Credit:element.credit, Paid:count, Balance:element.balance })
 });

//  var resultProductData = this.paidval.filter(function(a) {
//   return a.dat!="dd-mm-yyyy"
// });
// this.arr=resultProductData
console.log(this.array,'arr')
})
  }
  update(data){
    var value=data
    console.log(value,'cust')
   
  }


  getValue( value,isChecked: boolean){
  
    if(isChecked){
      this.checklist.push(value);
    }else{
      let index = this.checklist.indexOf(value);
            this.checklist.splice(index,1);
    } 
   
    console.log(this.checklist)
    }

    exportToExcel(event) {
      console.log(this.checklist,'check')
      if (this.checklist.length==0) {
        this.Excel=[]
        event.forEach(dat => {
          var Date =dat.Date
    var Name=dat.Name
    var Invoice=dat.Invoice
    var Credit=dat.Credit
    var Paid=dat.Paid
    var Balance=dat.Balance
    var obj=Object.assign({Date,Name,Invoice,Credit,Paid,Balance})
    this.Excel.push(obj)
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
          var Date =dat.Date
          var Name=dat.Name
          var Invoice=dat.Invoice
          var Credit=dat.Credit
          var Paid=dat.Paid
          var Balance=dat.Balance
          var obj=Object.assign({Date,Name,Invoice,Credit,Paid,Balance})
          this.Excel.push(obj)
        
      });
   
      console.log(this.Excel,'else')

         this.excelService.exportAsExcelFile( this.Excel, 'persons');
      }
    
    }
  // exportToExcel(event) {
    
   
  //     this.Excel=[]
  //     event.forEach(dat => {
    // var Date =dat.Date
    // var Name=dat.Name
    // var Invoice=dat.Invoice
    // var Credit=dat.Credit
    // var Paid=dat.Paid
    // var Balance=dat.Balance
    // var obj=Object.assign({Date,Name,Invoice,Credit,Paid,Balance})
    // this.Excel.push(obj)
  // });
  // console.log(this.Excel,'if')
  //   this.excelService.exportAsExcelFile( this.Excel, 'persons');
   
   
  
  // }
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
