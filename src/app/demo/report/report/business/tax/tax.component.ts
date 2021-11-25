import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../../../pages/sales/sales.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SupplierService } from '../../../../pages/form-elements/basic-elements/supplier.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {
  postSales:FormGroup;
  test:boolean=false; 
  table:boolean=true;
  sname:boolean=true;
  getSuppliers;
  searchSupplier
  patchValue;
  searchData;
  searchText;
  salesData;
  sss
  Excel=[]
  pro
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
dtElement: DataTableDirective; 
isDtInitialized:boolean = false
  constructor(  private salesErvice:SalesService,
    private fb:FormBuilder, 
    private supplierService:SupplierService,
    private excelService:ExcelService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.salesErvice.getInvProduct().subscribe(data=>{
      this.searchData=data;
     
    })
    this.dtTrigger.next();
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
  setchange(selectedvalue) {
    this.sss = selectedvalue;
    const emp = [this.sss];
   
  const filteredArray = this.searchData.filter(function(itm) {
    return emp.indexOf(itm.crmonth) > -1;
        });
  this.pro = filteredArray;
  console.log(this.pro,'month and year')
  this.dtTrigger.next();
  
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
  
   
    
  
  }
  exportToExcel(event) {
    this.Excel=[]
    event.forEach(dat => {
      var Date=dat.date
      var Supplier= dat.name
      var invoiceNumber=dat.invoiceNumber
      var GSTNumber=dat.cost
      var GrossTotal=dat.overAllInvoiceTotal
      var SalesCost =dat.billAmount
      var OverAllCGST=dat.overAllCGSTUnit
      var OverAllSGST=dat.overAllSGSTUnit
      var OverAllGST=dat.overAllGSTUnit
      // var Profit=dat.profit
      var obj=Object.assign({Date,Supplier,invoiceNumber,GSTNumber,GrossTotal,SalesCost,OverAllCGST,OverAllSGST,OverAllGST})
      this.Excel.push(obj)
     });
    this.excelService.exportAsExcelFile( this.Excel, 'persons');
  }


}
