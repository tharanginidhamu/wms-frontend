import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { BillingService } from "../../../sales/billing/billing.service";
import { CustomerService } from "../customer.service";
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customerhistorydetails',
  templateUrl: './customerhistorydetails.component.html',
  styleUrls: ['./customerhistorydetails.component.scss']
})
export class CustomerhistorydetailsComponent implements OnInit {
  // paid: FormArray;
  SaleForm: FormGroup;
  dummy;
  form;
  sale
  data
  total
  balance
  toiv
  amountpaid
  Credit
  arr=[]
  name
  location
  credit
  amount
  paidarr=[]
  paidval
  
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor( private fb:FormBuilder, private salesServicew:BillingService, 
    private customerSerice:CustomerService,private toster:ToastrService) { }

  ngOnInit() {
    var amount=0;
    this.amountpaid=amount
    this.sale=JSON.parse(localStorage.getItem('sale'))
this.name=this.sale.name
this.location=this.sale.billAddress
this.credit=this.sale.credit
this.amount=this.sale.overAllInvoiceAmount
    this.arr.push(this.sale)

    this.dtTrigger.next();
   this.arr.forEach(element => {
    this.paidval=element.paid
   
   });
   var resultProductData = this.paidval.filter(function(a) {
    return a.dat!="dd-mm-yyyy"
  });
  this.paidarr=resultProductData
   console.log(this.paidarr,'paid value')
     this.dataget();
      // this.salesServicew.getInvProduct().subscribe(data=>{
      //   this.dummy=data;
      //   console.log(this.dummy,'sales value')
      // })
      this.loadForm(this.sale);
       this.update(this.sale);
      

      // this.salesServicew.getProduct().subscribe(dat=>{
      //   this.data=dat
        this.arr.forEach(dat=>{
          this.balance=dat.balance
          this.total=0
          dat.paid.forEach(da=>{ 
          var mp= da.amountPaid
            this.total=this.total+Number.parseFloat(mp)
            console.log(this.total+Number.parseFloat(mp));

          })
        })
        console.log(this.total);
        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10
        };
        // console.log(dat,'get from cusfinm')
     
  }

  dataget() {
    this.SaleForm = this.fb.group({
      _id:[''],
      name:[''],
      overAllInvoiceAmount:[''],
      credit:[''],
      date:[''],
      billAddress:[''],
      shipAddress:[''],
      contactNumber:[''],
      alternateNumber:[''],
      cost:[''],
      products: this.fb.array([this.product]),
      paid:this.fb.array([this.createItem()])
       })
     }
    //  create() {
    //   return this.fb.group({
    //   _id:[''],
    //   itemCode:[''],
    //   idate:[''],
    //   description:[''],
    //   hsnCode:[''],
    //   vom:[''],
    //   custQuantity:[''],
    //   unitRate:[''],
    //   CGST:[''],
    //   SGST:[''],
    //   col33: [0],
    //   col34:[0],
    //   col35:[0],
  
    //   })
    // }

     createItem() {
      return this.fb.group({  
      // _id:[''],
      dat:[''],
      amountPaid:[''],
      }) 
    }
  
    // get products() {
    //   return this.SaleForm.get('products') as FormArray;
    // }

  get paid() {
    return this.SaleForm.get('paid') as FormArray;
  }

  loadForm(data){
    //create lines array first
      for (let line = 1; line < data.products.length; line++){
        const productsFormArray = this.SaleForm.get("products") as FormArray;
        productsFormArray.push(this.product);
        
       
      }
      //once we setup the form with all the arrays and such, we cna just
      //patch the form:
     
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
        CGST:'',
        SGST:'',
        col33: 0,
        col34:0,
        col35:0,
                });
    }


  onSubmit(val) {
     console.log(val,'dataval')
     val.amount=val.overAllInvoiceAmount
   val.overAllInvoiceTotal=val.overAllInvoiceAmount-(Number.parseFloat(val.credit));
      val.balance=val.overAllInvoiceAmount-(Number.parseFloat(val.credit)+Number.parseFloat(this.total)+Number.parseFloat(this.amountpaid));
      this.salesServicew.putProduct(val).subscribe(data=>{
        console.log(data,'puted')
        console.log(val.balance,'balance bal') 
        this.toster.success('added successfully');

       })
      
    console.log(val.balance,'balance bal')
  }
  update(val) {
    console.log(val,'salesupdate')
    this.SaleForm.patchValue(val);
 
}
}
