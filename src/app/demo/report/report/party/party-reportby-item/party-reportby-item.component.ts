import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { SalesService } from "../../../../pages/sales/sales.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-party-reportby-item',
  templateUrl: './party-reportby-item.component.html',
  styleUrls: ['./party-reportby-item.component.scss']
})
export class PartyReportbyItemComponent implements OnInit {
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
  final
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


  const ava = this.pro.reduce((accc, objj) => {
    const existItem = accc.find(item => item.cost === objj.cost);
    if (existItem) {
      existItem.products.forEach(data=>{
        objj.products.forEach(dat=>{
        
          existItem.products.push(dat)         
          }) 
              
        })      
      // existItem.invoiceTotal += objj.invoiceTotal;
      return accc;
    }
    accc.push(objj);
    return accc;
   }, []);
 this.final = ava;
 console.log(this.final,'final')
  
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
    var Date=event.date
    var Supplier= event.name
    var invoiceNumber=event.invoiceNumber
    var GSTNumber=event.cost
    var GrossTotal=event.overAllInvoiceTotal
    var BillAddress =event.billAddress
    var ShipAddress =event.shipAddress
    var product=event.products
    product.forEach(dat => {
      var itemCode=dat.itemCode
      var itemName = dat.description
      var Quantity=dat.custQuantity
      var Total=dat.invoiceTotal
      var obj=Object.assign({Date,Supplier,invoiceNumber,GSTNumber,GrossTotal,BillAddress,ShipAddress,itemCode,itemName,Quantity,Total})
      this.Excel.push(obj)
     });
    this.excelService.exportAsExcelFile( this.Excel, 'persons');
  }
}
