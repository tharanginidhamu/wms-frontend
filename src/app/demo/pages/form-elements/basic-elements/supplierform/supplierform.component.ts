import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SupplierService } from "../supplier.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplierform',
  templateUrl: './supplierform.component.html',
  styleUrls: ['./supplierform.component.scss']
})
export class SupplierformComponent implements OnInit {
  supplierForm:FormGroup;
  getsupplier;
  id
  Name
  location
  constructor(private fb:FormBuilder, private supplierService:SupplierService,  private toster:ToastrService
    ) {
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
      name:[''],
      date:[''],
      billAddress:[''],
      shipAddress:[''],
      contactNumber:[''],
      alternateNumber:[''],
      cost:['']
    })
    var local = localStorage.getItem('sup')
    this.supplierForm.patchValue(JSON.parse(local))
  }
  onSubmit(value){
    if(value._id===''){
      this.supplierService.postSuppliers(value).subscribe(data=>{
       console.log(data);
       this.toster.success('added successfully');

      })
    }else{
      this.supplierService.putSuppliers(value).subscribe(data=>{
        console.log(data)
        this.toster.success('updated successfully');

        localStorage.removeItem('sup')

      })
    }

  }

}
