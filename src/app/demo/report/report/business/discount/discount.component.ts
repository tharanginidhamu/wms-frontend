import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../../../pages/sales/sales.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SupplierService } from '../../../../pages/form-elements/basic-elements/supplier.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  getData
  getDa
  product
  forBill=true
  table=false  
  values=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 
  isDtInitialized:boolean = false
  constructor( private salesErvice:SalesService,
    private fb:FormBuilder, 
    private supplierService:SupplierService,
    private excelService:ExcelService) { }

  ngOnInit() {
    this.salesErvice.getInvProduct().subscribe(data=>{
      this.getData=data;
      this.dtTrigger.next();
      console.log(this.getData)
      this.getData.forEach(data=>{
        data.products.forEach(dat=>{
        this.product.push(dat)
         
        })
        this.dtTrigger.next();
       
      })
      // console.log(this.product,'arrayproduct')
   
     
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  show(data){
    this.values=[]
    this.forBill=false
    this.table=true
// this.totalAM=data.overAllInvoiceAmount
// this.allcgst=data.overAllCGSTUnit
// this.allsgst=data.overAllSGSTUnit
 this.values.push(data)
   this.getDa=data.products
   
   this.dtTrigger.next();
   console.log(data,'bill')
  }

}
