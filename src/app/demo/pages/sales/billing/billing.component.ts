import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl } from "@angular/forms";
import { AddproductService } from "../../../pages/core-chart/crt-morris/addproduct.service";
import { SupplierService } from '../../../pages/form-elements/basic-elements/supplier.service';
import { SalesService } from "../sales.service";
import { CustomerService } from "../../../pages/finance/customerhistory/customer.service"
import { Observable, of, interval } from 'rxjs'
import { tap, debounce, switchMap } from 'rxjs/operators'
// import { numToWords} from '../../../../../../node_modules/number-to-words';
import { ToastrService } from 'ngx-toastr';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  SaleForm: FormGroup;

  // myForm:FormGroup;
  products: FormArray;
  test:boolean=true;
  table:boolean=true;
  srch:boolean=true;
  getSuppliers;
  searchSupplier;
  patchValues=[];
  hhh=[];
  invoice;
  searchData;
  searchText;
  arrdate
  salesData;
  ivdate=new Date();
  dater
  checkdate
  change=0;
  search_item = new FormControl();
  search_supply = new FormControl();

  itemLength
  itemLength2
  isLoading = false;
  result_list: any;
  result_supply: any;
  Totalamount
  SGST
  CGST
  word
  id
  Name
  location


  constructor(private addProductService:AddproductService,
    private salesErvice:SalesService,
    private fb:FormBuilder,
    private supplierService:SupplierService,
    private customerService:CustomerService,
    private router: Router,private toster:ToastrService
    //  private numToWord: numToWords,
    ) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
        this.Name=element.branchName
        this.location=element.branchLocation
      });
     }

  ngOnInit() {
    // var converter = require('numToWord');
    // converter.toWords(this.word);


    this.search_item.valueChanges.pipe(
      // tap(() => this.isLoading = true),
      // debounce(() => interval(1000)),
      switchMap(value => this.search(value))
    ).subscribe(res => {
      this.result_list = res;
      this.isLoading = false;
    },
    err => {
      console.error(err.error);
    });
    console.log(this.result_list)

    // this.search_word.valueChanges.pipe(sw)

    this.search_supply.valueChanges.pipe(
      // tap(() => this.isLoading = true),
      // debounce(() => interval(1000)),
      switchMap(value => this.searchsupply(value))
    ).subscribe(res => {
      this.result_supply = res;
      this.isLoading = false;
    },
    err => {
      console.error(err.error);
    });
    console.log(this.result_list)

  //  console.log( this.SaleForm.touched,'kkkk')
    this.checkdate='poda lusu';
    this.addProductService.getProduct().subscribe(data=>{
      this.searchData=data;
      console.log(this.searchData,'kkkk')
    })
    this.salesErvice.refreshNeeded$.subscribe(()=>{
        this.getFuction();
      })

    this.getSales();
    this.getSuplier();
    this.SaleForm = this.fb.group({
    _id:[''],
    itemC:[''],
    branchId:this.id,
    branchName:this.Name,
    branchLocation:this.location,
    name:[''],
    date:[''],
    credit:[0],
    //  balance:[' '],
    toiv:[''],
    amount:[''],
    //  overAllInvoiceTotal:[' '],
    billAddress:[''],
    shipAddress:[''],
    alternateNumber:[''],
    contactNumber:[''],
    cost:[''],
    products: this.fb.array([this.createItem()])
    })
    this.dater=(this.ivdate.getMonth()+1)+'/'+(this.ivdate.getDate())+'/'+(this.ivdate.getFullYear());
    console.log(this.dater,'dater')


    
  }
  createItem() {
    return this.fb.group({
    _id:[''],
    branchId:this.id,
   
    itemCode:[''],
    idate:[''],
		description:[''],
		hsnCode:[''],
		vom:[''],
		custQuantity:[''],
    unitRate:[''],
    category:[''],
    // SGSTAmount:[''],
		CGST:[''],
    SGST:[''],
    gstcals:[''],
    gstunit:[''],
    discount:[''],
    cgstsgst:[''],
    col33: [0],
    col34:[0],
    col35:[0],

    })
  }
  dataget() {
    this.SaleForm = this.fb.group({

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
      // balance:[''],
      // overAllInvoiceTotal:[''],
      toiv:[''],
      amount:[''],
      products: this.fb.array([this.product]),
      paid:this.fb.array([this.paid])
       })
     }

     loadForm(data){
      //create lines array first
        for (let line = 1; line < data.products.length; line++){
          const productsFormArray = this.SaleForm.get("products") as FormArray;
          productsFormArray.push(this.product);
         }
        //patch the form:
        for (let lin = 1; lin < data.paid.length; lin++){
          const paidFormArray = this.SaleForm.get("paid") as FormArray;
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
        category:'',
        // SGSTAmount:0,
        gstcals:'',
        gstunit:'',
        CGST:0,
        SGST:0,
        cgstsgst:'',
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
  getFuction(){
    this.salesErvice.getInvProduct().subscribe(data=>{
      this.invoice=data;

   console.log( this.invoice,'totalinv')
    })
  }

  addItem() {
    this.change++;
    console.log(this.change,'change');

    this.products = this.SaleForm.get('products') as FormArray;
    this.products.push(this.createItem());
  }

  deleteAddressGroup(index: number) {
    this.change--;
    console.log(this.change,'change');

    const add = this.SaleForm.get('products') as FormArray;
    add.removeAt(index)
    this.hhh.splice(index,1)
  }
  keyup1(event) {
    console.log(event,'event');
}
removeGroup(index: number) {
  const add = this.SaleForm.get('products') as FormArray;
   add.at(index).reset()
  this.hhh.splice(index,1)
  console.log( this.hhh,'event');
}

search(keyword: string): Observable<any> {
  this.itemLength2=keyword.length
  console.log(keyword.length);
  var emp=[keyword]
  var key=keyword.toLowerCase()

  var dis=[ key]
  const result = this.searchData.filter(e => 
     ( e.itemCode.indexOf(emp) !== -1 ||  e.description.toLowerCase().indexOf(dis) !== -1))
  return of(result) 
}
// var filteredArray = this.dat.filter(function(itm){
//   return emp.indexOf(itm.status) > -1;
//       });     const result = this.list.filter(e => e.indexOf(keyword) !== -1)

searchsupply(keyword: string): Observable<any> {
  this.itemLength=keyword.length
  var key=keyword.toLowerCase()
  console.log(keyword.toLocaleLowerCase(),'viki');
  var emp=[key]
  const result = this.getSuppliers.filter(e => 
    // e.name.indexOf(emp) !== -1)
    e.name.toLowerCase().indexOf(emp) !== -1)
  return of(result) 
}

editData(value){
  console.log(value.products.length, 'length')
  this.change=(value.products.length)-1;

   this.test=true
  this.table=false
  this.hhh=value.products
  console.log(value, 'button')

  this.dataget();
  this.loadForm(value)

  this.SaleForm.patchValue(value);
  console.log(value, 'button')
}
getSuppliersData(value){
    this.itemLength=0;
      // var val=value
      value.date=this.dater;
      // this.arrdate=value.date
      value._id=" ";
      console.log(value,'getsupply value')
      console.log(value.date,'getsupply value')
  
      this.SaleForm.patchValue(value)
    }
    getSuplier(){
    this.supplierService.getSupplier().subscribe(data=>{
      this.getSuppliers=data
      console.log(this.getSuppliers, 'buttonsuplier')
    })
    }
  onSubmit(val) {
    console.log('in')

    if (val._id==" ") {
      // val.overAllInvoiceTotal=val.overAllInvoiceAmount
      // val.balance=val.overAllInvoiceAmount
      this.salesErvice.postInvProduct(val).subscribe(data=>{
        console.log(data)
        this.toster.success('added successfully');

        this.test =false;
    })
   
      
    } else {
      this.SGST=0;
      this.CGST=0;
         this.Totalamount=0
         val.products.forEach(dat=>{
           this.Totalamount= this.Totalamount+dat.col33 
           this.CGST=this.CGST+ Number.parseFloat(dat.CGSTAmount)
           this.SGST=this.SGST+ Number.parseFloat(dat.SGSTAmount)
          console.log( dat.CGST)
         })
         console.log( this.Totalamount)
         console.log( this.CGST)
         console.log( this.SGST)
         val.overAllInvoiceAmount= this.Totalamount
        val.overAllCGSTUnit=this.CGST
        val.overAllSGSTUnit=this.SGST
        val.overAllInvoiceTotal=this.Totalamount
        val.balance=this.Totalamount
  
      this.salesErvice.putInvProduct(val).subscribe(data=>{
             console.log(data)
             this.test =false;
             this.table =true;
         })
         console.log(val,'data')
      
    }
   
  }
  
  getProduct(value){
    if (this.change==0) {
      this.hhh=[]
    }
    this.itemLength2=0;
    value.idate=this.dater;
   this.hhh.push(value);
   console.log(this.hhh,'starthhhh')
  let valuee={
    "products":this.hhh
  }
  
  console.log(this.hhh,'hhval')
   this.SaleForm.patchValue(valuee)
}

  getSales(){
    this.salesErvice.getInvProduct().subscribe(data=>{
      
     this.salesData=data;
     console.log(this.salesData, 'buttonsales')

    })
  }
 
  viewBilling(data){
    this.patchValues.push(data);
  }
  back(){
    this.test=true;
  }
  printPage() {
    window.print();
  }

}
