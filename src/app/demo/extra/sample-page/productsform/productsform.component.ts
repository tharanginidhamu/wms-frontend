import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray ,FormControl} from "@angular/forms";
import { PurchaseService } from "../purchase.service";
import { ToastrService } from 'ngx-toastr';
import { Observable, of, interval } from 'rxjs'
import { tap, debounce, switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-productsform',
  templateUrl: './productsform.component.html',
  styleUrls: ['./productsform.component.scss']
})
export class ProductsformComponent implements OnInit {
   purchaseForm:FormGroup;
   invoice:FormArray;
   dater
   sale
   getSuppliers
   itemLength2
   itemLength
   result_supply: any;
   isLoading = false;
   result_list: any;

   arr=[]
   change=0
   id
  Name
  location
   search_supply = new FormControl();

  constructor(private fb:FormBuilder, private purchaseService:PurchaseService,private toster:ToastrService) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
   }

  ngOnInit() {
   
    this.sale=JSON.parse(localStorage.getItem('key'))
    this.arr=this.sale
    this. getSuplier()
    this.purchaseForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      supplierDate:[''],
      supplierName:[''],
      invoiceNo:[''],
      invoice: this.fb.array([this.invoi])
    })
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

    this.loadForm(this.sale);
    this.update(this.sale);

    }
    loadForm(data){
      //create lines array first
        for (let line = 1; line < data.invoice.length; line++){
          const invoiceFormArray = this.purchaseForm.get("invoice") as FormArray;
          invoiceFormArray.push(this.invoi);
          
         
        }
        //once we setup the form with all the arrays and such, we cna just
        //patch the form:
       
      }
    get invoi():FormGroup {
      return this.fb.group({
        branchId:this.id,
     
        itemCode:[''],
      description:[''],
      returnproduct:[0],
      custQuantity:[''],
      category:[''],
      invDate:[''],
      total:[]
      })
    }
    // get invoice():FormGroup{
    //   return this.fb.group({
    //     _id:'',
    //     itemCode:'',
    //     idate:'',
    //     description:'',
    //     hsnCode:'',
    //     vom:'',
    //     custQuantity:'',
    //     unitRate:'',
    //     CGST:'',
    //     SGST:'',
    //     col33: 0,
    //     col34:0,
    //     col35:0,
    //             });
    // }
    addItem() {
      this.change++;
      this.invoice = this.purchaseForm.get('invoice') as FormArray;
      this.invoice.push(this.invoi);
    }
    removeItem(index) {
      this.change--;
      this.invoice = this.purchaseForm.get('invoice') as FormArray;
      this.invoice.removeAt(index)

    }
   onSubmit(val){
    //  this.toster.warning('Updated successfully');
    // this.toster.success('Updated successfully');
    // if (val._id=='') {
      this.purchaseService.postPurchaseData(val).subscribe(data=>{
        console.log(data)
        this.toster.success('Added successfully');
        this.purchaseForm.reset();
        // this.purchaseForm.
       })
      
    // } else {
    //   this.purchaseService.putPurchaseData(val).subscribe(data=>{
    //     console.log(data)
        
    //    })
      
    // }
   
   console.log(this.purchaseForm.value)
}

update(val) {
  this.change=(val.invoice.length)-1;
  console.log(val.invoice.length,'salesupdate')
  this.purchaseForm.patchValue(val);

}
searchsupply(keyword: string): Observable<any> {
  this.itemLength=keyword.length
  var key=keyword.toLowerCase()
  console.log(keyword.toLocaleLowerCase(),'viki');
  var emp=[key]
  const result = this.getSuppliers.filter(e => 
    // e.name.indexOf(emp) !== -1)
    e.supplierName.toLowerCase().indexOf(emp) !== -1)
  return of(result) 
}
getSuppliersData(value){
  this.itemLength=0;
    // var val=value
    value.date=this.dater;
    // this.arrdate=value.date
    value._id=" ";
    console.log(value,'getsupply value')
    // console.log(value.date,'getsupply value')

    this.purchaseForm.patchValue(value)
  }
  getSuplier(){
  this.purchaseService.getData().subscribe(data=>{
    this.getSuppliers=data
    console.log(this.getSuppliers, 'buttonsuplier')
  })
  }
}
