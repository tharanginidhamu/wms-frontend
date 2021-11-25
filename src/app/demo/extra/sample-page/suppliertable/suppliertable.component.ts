import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl } from "@angular/forms";

import { PurchaseService } from "../purchase.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-suppliertable',
  templateUrl: './suppliertable.component.html',
  styleUrls: ['./suppliertable.component.scss']
})
export class SuppliertableComponent implements OnInit {
  getSupplier;
checklist=[]
Excel=[]
fdate
  tdate
fromdate = new FormControl();
enddate = new FormControl();
datefilter=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router:Router, private supplierService:PurchaseService,
    private toster:ToastrService,private excelService:ExcelService) { }

  ngOnInit() {
    this.supplierService.getData().subscribe(data=>{
      this.getSupplier=data
      this.datefilter=this.getSupplier
      console.log(this.getSupplier,'fvsd')
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
  supplierform()
  {
    localStorage.removeItem('supdata')
    this.router.navigate(['/oursupplier/addsuppliers'])
  }
  editSupplier(value){
    localStorage.setItem('supdata', JSON.stringify(value))
    this.router.navigate(['/oursupplier/addsuppliers'])
  }
  deleteSupplier(id){
    this.supplierService.deletePData(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
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
      var SupplierName =dat.supplierName
      var SupplierLocation=dat.supplierLocation
      var ContactNumber=dat.contactNumber
      var AlternateNumber=dat.alternateNumber
      var GSTNumber=dat.GSTNumber
      var obj=Object.assign({SupplierName,SupplierLocation,ContactNumber,AlternateNumber,GSTNumber})
      this.Excel.push(obj)
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
        var SupplierName =dat.supplierName
        var SupplierLocation=dat.supplierLocation
        var ContactNumber=dat.contactNumber
        var AlternateNumber=dat.alternateNumber
        var GSTNumber=dat.GSTNumber
        var obj=Object.assign({SupplierName,SupplierLocation,ContactNumber,AlternateNumber,GSTNumber})
        this.Excel.push(obj)
      });
      console.log(this.Excel,'else')

        this.excelService.exportAsExcelFile( this.Excel, 'persons');
      }
    
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

    var resultProductData = this.getSupplier.filter(function(a) {
      return new Date(a.supplierDate) >= startDate && new Date(a.supplierDate) <= endDate
    });
    this.datefilter=resultProductData
    console.log(resultProductData,'selected data');
    }
}