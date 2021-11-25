import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { SalesService } from "../../../../pages/sales/sales.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-party-statement',
  templateUrl: './party-statement.component.html',
  styleUrls: ['./party-statement.component.scss']
})
export class PartyStatementComponent implements OnInit {
  getData;
  bill=[]
  values=[]
  totalAM
  allcgst
  allsgst
  forBill=true
  table=false
  product=[]
  Excel=[]
  sss
  mname
  pro
  SaleForm: FormGroup;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 
isDtInitialized:boolean = false
  constructor(private fb:FormBuilder,
    private router:Router,
     private billingService:SalesService,
     private excelService:ExcelService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


    this.billingService.getInvProduct().subscribe(data=>{
      this.getData=data;
     
      console.log(this.getData)

      this.getData.forEach(data=>{
        data.products.forEach(dat=>{
        this.product.push(dat)         
        })      
      })

      console.log(this.product,'arrayproduct') 
    })
  }
  show(data){
    this.values=[]
    this.forBill=false
    this.table=true

 this.values.push(data)
   this.bill=data.products
   console.log(data,'bill')
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
  }

  exportToExcel(event) {
    this.Excel=[]
    event.forEach(dat => {
      var Date=dat.date
      var Supplier= dat.name
      var invoiceNumber=dat.invoiceNumber
      var GSTNumber=dat.cost
      var GrossTotal=dat.overAllInvoiceTotal
      var BillAddress =dat.billAddress
      var ShipAddress =dat.shipAddress
      // var OverAllSGST=dat.overAllSGSTUnit
      // var OverAllGST=dat.overAllGSTUnit
      // var Profit=dat.profit
      var obj=Object.assign({Date,Supplier,invoiceNumber,GSTNumber,GrossTotal,BillAddress,ShipAddress})
      this.Excel.push(obj)
     });
    this.excelService.exportAsExcelFile( this.Excel, 'persons');
  }

}
