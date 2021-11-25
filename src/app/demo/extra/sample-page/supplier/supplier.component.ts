import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from "@angular/forms";
import { PurchaseService } from "../purchase.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  supplierForm:FormGroup;
  getsupplier;
  fdate
  tdate
  id
  Name
  location
  fromdate = new FormControl();
  enddate = new FormControl();
  constructor(private fb:FormBuilder, private supplierService:PurchaseService,  private toster:ToastrService) { 
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
  }

  ngOnInit() {
    this.supplierForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      supplierName:[''],
      supplierDate:[''],
      supplierLocation:[''],
      contactNumber:[''],
      alternateNumber:[''],
      GSTNumber:['']
    })
    var local = localStorage.getItem('supdata')
    this.supplierForm.patchValue(JSON.parse(local))
  }
  onSubmit(value){
    if(value._id===''){
      this.supplierService.postData(value).subscribe(data=>{
       console.log(data);
       this.toster.success('added successfully');

      })
    }else{
      this.supplierService.putData(value).subscribe(data=>{
        console.log(data)
        this.toster.success('updated successfully');

        localStorage.removeItem('sup')

      })
    }

}

}
