import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../sales/sales.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SupplierService } from '../../form-elements/basic-elements/supplier.service'
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
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
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(
     private salesErvice:SalesService,
     private fb:FormBuilder, 
     private supplierService:SupplierService,
     private toster:ToastrService
     ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.salesErvice.getInvProduct().subscribe(data=>{
      this.searchData=data;
      this.dtTrigger.next();
    })
    // this.billingService.getInvProduct().subscribe(data=>{
    //   this.getData=data;
    //   console.log(this.getData)
    //   this.getData.forEach(data=>{
    //     data.products.forEach(dat=>{
    //     this.product.push(dat)
         
    //     })
       
    //   })
    this.postSales=this.fb.group({
      _id:[''],
      date:[''],
      name:[''],
      itemCode:[''],
      description:[''],
      hsnCode:[''],
      vom:[''],
      quantity:[''],
      unitRate:[''],
      CGST:[''],
      SGST:['']
    })
    this.getSales();
    this.getSuplier();
  }
  getProduct(value){
  //  this.patchValue=value;
  this.postSales.patchValue(value)
  this.test=true;
  this.table=false
  }
  getSales(){
    this.salesErvice.getProduct().subscribe(data=>{
     this.salesData=data;
    })
  }
  getSuppliersData(value){
    this.postSales.patchValue(value)
    this.sname=false;

  }
  getSuplier(){
  this.supplierService.getSupplier().subscribe(data=>{
    this.getSuppliers=data
  })
  }
  onSubmit(value){
 
      this.salesErvice.postProduct(value).subscribe(data=>{ 

        this.toster.success('added successfully');

      })
      this.test=false;
      this.table=true
      this.searchText=''
    }
  
  
  deleteProduct(id){
    this.salesErvice.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.toster.success('delete successfully');

    })
  }
  editProduct(value){
    this.postSales.patchValue(value);
    this.test=true;
  this.table=false

  }
}
