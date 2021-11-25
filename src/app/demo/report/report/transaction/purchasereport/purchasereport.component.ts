import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PurchaseService } from "../../../../extra/sample-page/purchase.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";


@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.scss']
})
export class PurchasereportComponent implements OnInit {
  getData;
  name
  date
  invoice
  arr=[]
  val=false;
  pro
  Excel=[]
  product
  sss
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 
  isDtInitialized:boolean = false
  constructor(private router: Router,
     private purchaseService:PurchaseService,
    private excelService:ExcelService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.purchaseService.getPurchaseData().subscribe(data=>{
      this.getData=data;
    
      console.log(this.getData)
     
     })
   
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
 
  setchange(selectedvalue) {
    this.sss = selectedvalue;
   
    this.invoice = [];
    const emp = [this.sss];
   
  const filteredArray = this.getData.filter(function(itm) {
    return emp.indexOf(itm.month) > -1;
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
     var currentMonth = 5
     var currentYear = 2020
    
    //Get the year and month from the iterated date
    // var [year, month] = e.date.split('-');
    
    //Then filter the dates
   var events =  this.getData.filter(e => {
        var [month,year] = e.monthyear.split('-'); // Or, var month = e.date.split('-')[1];
        return emp.indexOf(currentMonth == month) && (currentYear == year);
    });
//   var eff=sli.slice(0,9)
//   var efs=sli.slice(11,21)
//   let start = eff
//   let end = efs
 
// var getdat=this.getData
// console.log(start,end,getdat,'getdata');
// let selectedMembers = getdat.filter((m) => {
// return new Date(m.date) >= new Date(start) && new Date(m.date) <= new Date(end)
// });
  
    console.log(this.pro,'month and year')
    
  
  }
  exportToExcel(event) {
    this.Excel=[]
    event.forEach(data => {
      var product=data.invoice
      var Supplier=data.supplier
      var InvoiceNum=data. invoiceNo
      var InvoiceAmount=data.invoiceAmount
      product.forEach(dat => {
        var Date=dat.invDate
        var ItemCode= dat.itemCode
        var Description=dat.description
        var Quantity=dat.custQuantity
        var Total=dat.total
        // var Profit=dat.profit
        var obj=Object.assign({Supplier,InvoiceNum,InvoiceAmount,Date,ItemCode,Description,Quantity,Total})
        this.Excel.push(obj)
       });
     });
    this.excelService.exportAsExcelFile( this.Excel, 'persons');
  }
}
