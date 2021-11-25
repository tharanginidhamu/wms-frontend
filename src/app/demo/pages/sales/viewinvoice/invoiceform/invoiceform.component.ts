import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../sales.service";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AddproductService } from "../../../../pages/core-chart/crt-morris/addproduct.service";
import { SupplierService } from '../../../../pages/form-elements/basic-elements/supplier.service';
import { CustomerService } from "../../../../pages/finance/customerhistory/customer.service"
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss']
})
export class InvoiceformComponent implements OnInit {
  InvoiceForm: FormGroup;
  products: FormArray;
  sale
  data=[]

  getSuppliers
  dater
  hhh=[];
  searchText

  searchData
  forBill=false
  ivdate=new Date();
bill
Totalamount
CGST
SGST
id
  Name
  location
  constructor( private addProductService:AddproductService,
    private toster:ToastrService,
    private salesService:SalesService,
    private fb:FormBuilder,
    private supplierService:SupplierService,
    private customerService:CustomerService,private router:Router ) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
    }

  ngOnInit() {
    this.addProductService.getProduct().subscribe(data=>{
      this.searchData=data;
      console.log(this.searchData,'kkkk')
    })

    this.sale=JSON.parse(localStorage.getItem('invoice'))
    this.data.push(this.sale)
    this.dataget();
    // this.salesServicew.getInvProduct().subscribe(data=>{
    //   this.dummy=data;
    //   console.log(this.dummy,'sales value')
    // })
    // this.dater=(this.ivdate.getMonth()+1)+'/'+(this.ivdate.getDate())+'/'+(this.ivdate.getFullYear());
    this.dater=this.sale.date

    this.loadForm(this.sale);
     this.update(this.sale);
  }

  dataget() {
    this.InvoiceForm = this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      name:[''],
      overAllInvoiceAmount:[''],
      credit:[''],
      date:[''],
      billAddress:[''],
      shipAddress:[''],
      contactNumber:[''],
      alternateNumber:[''],
      cost:[''],
      balance:[''],
      toiv:[''],
      amount:[''],
      products: this.fb.array([this.product]),
      paid:this.fb.array([this.paid])
       })
     }

     loadForm(data){
      //create lines array first
        for (let line = 1; line < data.products.length; line++){
          const productsFormArray = this.InvoiceForm.get("products") as FormArray;
          productsFormArray.push(this.product);
         }
        //patch the form:
        for (let lin = 1; lin < data.paid.length; lin++){
          const paidFormArray = this.InvoiceForm.get("paid") as FormArray;
          paidFormArray.push(this.paid);
         }
       
      }

     get product():FormGroup{
      return this.fb.group({
        _id:'',
        branchId:this.id,
      
        itemCode:'',
        idate:'',
        description:'',
        hsnCode:'',
        vom:'',
        custQuantity:'',
        unitRate:'',
        CGST:0,
        SGST:0,
        CGSTAmount:0,
        SGSTAmount:0,
        col33: 0,
        col34:0,
        col35:0,
                });
    }
    get paid():FormGroup {
      return this.fb.group({  
       _id:'',
      dat:'',
      amountPaid:'',
      }) 
    }

    onSubmit(val) {
     this.SGST=0;
     this.CGST=0;
        this.Totalamount=0
        val.products.forEach(dat=>{
          this.Totalamount= this.Totalamount+dat.col33 
          this.CGST=this.CGST+ Number.parseFloat(dat.CGSTAmount )
          this.SGST=this.CGST+ Number.parseFloat(dat.SGSTAmount )

        })
        val.overAllInvoiceAmount= this.Totalamount
       val.overAllSGSTUnit=this.SGST
       val.overAllCGSTUnit=this.CGST

     

      console.log(   this.CGST,this.SGST,'cgst amount')
       this.salesService.putInvProduct(val).subscribe(data=>{
         console.log(data,'puted')
         this.toster.success('updated successfully');

        })
        localStorage.removeItem('invoice')
   }
   addItem() {
    this.products = this.InvoiceForm.get('products') as FormArray;
    this.products.push(this.product);
   
  }
  getProduct(value){
    value.idate=this.dater;
   this.hhh.push(value)
   console.log(this.hhh,'starthhhh')

  let valuee={
    "products":this.hhh
  }
  console.log(this.hhh,'hhval')
  console.log(value.idate,'idate val')

   this.InvoiceForm.patchValue(valuee)
}

   update(val) {
     console.log(val,'salesupdate')
     this.InvoiceForm.patchValue(val);
  
 }
 back(){
  this.router.navigate(['/saless/viewinvoice'])
}
 

}
