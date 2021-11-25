import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AddproductService } from "../addproduct.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'] 
})
export class ProductdetailsComponent implements OnInit {
  addProductForm:FormGroup
  id
  Name
  location
  constructor(private fb:FormBuilder, private addProductService:AddproductService,private toster:ToastrService ) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
   }

  ngOnInit() {
    this.addProductForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      category:[''],
      itemCode:[''],
      idate:[''],
      description:[''],
      hsnCode:[''],
      quantity:1,
      vom:[''],
      unitRate:[0],
      CGST:[''],
      SGST:['']
    })
    var local = localStorage.getItem('pro');
    this.addProductForm.patchValue(JSON.parse(local))
  }
onSubmit(value){
  if(value._id===''){
    this.addProductService.postProduct(value).subscribe(data=>{
      console.log(data)
      this.toster.success('added successfully');

    })
  }else{
    this.addProductService.putProduct(value).subscribe(data=>{
      console.log(data)
      this.toster.success('updated successfully');

    })
  }
  
}
}
