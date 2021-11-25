import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { AddproductService } from "../../../../pages/core-chart/crt-morris/addproduct.service";
import { SupplierService } from '../../../../pages/form-elements/basic-elements/supplier.service';
import { SalesService } from "../../sales.service";
import { CustomerService } from "../../../../pages/finance/customerhistory/customer.service"
import { empty } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editbill',
  templateUrl: './editbill.component.html',
  styleUrls: ['./editbill.component.scss']
})
export class EditbillComponent implements OnInit {
  postSales:FormGroup;
  SaleForm: FormGroup;
  SalForm: FormGroup;

  // myForm:FormGroup;
  products: FormArray;
  test:boolean=false;
  table:boolean=true;
  sname:boolean=true;
  getSuppliers;
  searchSupplier;
  patchValues=[];
  hhh=[];
  invoice;
  searchData;
  searchText;
  search
  arrdate
  salesData;
  ivdate=new Date();
  dater
  sale
  checkdate
  gone:boolean=true;

  constructor(private addProductService:AddproductService,
    private saleService:SalesService,
    private fb:FormBuilder,
    private supplierService:SupplierService,private toster:ToastrService,
    private customerService:CustomerService) { }

  ngOnInit() {
    this.addProductService.getProduct().subscribe(data=>{
      this.searchData=data;
      console.log(this.searchData,'kkkk')
    })
    

    this.sale=JSON.parse(localStorage.getItem('bill'))
    this.hhh=this.sale.products
    console.log(this.sale.products,'kkkk')

    // this.data.push(this.sale)
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
  deleteAddressGroup(index: number) {
    this.hhh.forEach(data=>{
      console.log(data,'remove data')
      console.log(data,'puted')
     })
    const add = this.SaleForm.get('products') as FormArray;
    add.removeAt(index)
    
  }
  removeGroup(index: number) {
    this.hhh.forEach(data=>{
      console.log(data,'remove data')
      console.log(data,'puted')
     })
     this.hhh.splice(index,1)
    const add = this.SaleForm.get('products') as FormArray;
    add.at(index).reset()
    console.log(this.hhh,'hhhvalue')
   
  }


  dataget() {
    this.SaleForm = this.fb.group({
      _id:[''],
      name:[''],
      itemC:[''],
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
      // paid:this.fb.array([this.paid])
       })
     }

     loadForm(data){
      //create lines array first
        for (let line = 1; line < data.products.length; line++){
          const productsFormArray = this.SaleForm.get("products") as FormArray;
          productsFormArray.push(this.product);
         }
        //patch the form:
        // for (let lin = 1; lin < data.paid.length; lin++){
        //   const paidFormArray = this.SaleForm.get("paid") as FormArray;
        //   paidFormArray.push(this.paid);
        //  }
       
      }

     get product():FormGroup{
      return this.fb.group({
        _id:'',
        
        itemCode:'',
        idate:'',
        description:'',
        hsnCode:'',
        vom:'',
        custQuantity:'',
        unitRate:'',
        CGST:0,
        SGST:0,
        col33: 0,
        col34:0,
        col35:0,
                });
    }
    // get paid():FormGroup {
    //   return this.fb.group({  
    //    _id:'',
    //   dat:'',
    //   amountPaid:'',
    //   }) 
    // }

    onSubmit(val) {
      console.log(val,'dataval')
       this.saleService.putInvProduct(val).subscribe(data=>{
         console.log(data,'puted')
         this.toster.success('updated successfully');

        })
        // localStorage.removeItem('invoice')
   }
   add() {
    this.products = this.SaleForm.get('products') as FormArray;
    this.products.push(this.product);
   
  }
  enableSection(index,disabled){
  const capabilityFormGroup = (<FormArray>this.SaleForm.get('products')).at(index);
  disabled ? capabilityFormGroup.enable() : capabilityFormGroup.disable();
  console.log(disabled,'disable')
  console.log(index,'index')
}
  getProduct(value){

     this.searchText ="";
    this.gone=false
    value.idate=this.dater;
   this.hhh.push(value)
   console.log(this.hhh,'starthhhh')

  let valuee={
    "products":this.hhh
  }
  // this.hhh=[]
  console.log(this.hhh,'hhval')
  console.log(value.idate,'idate val')

   this.SaleForm.patchValue(valuee)
   this.gone=true

}
 update(val) {
     console.log(val,'salesupdate')
     this.SaleForm.patchValue(val);

 }
}
