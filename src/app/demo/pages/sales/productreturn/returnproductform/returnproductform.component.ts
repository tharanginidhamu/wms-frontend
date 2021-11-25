import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ReturnService } from "../../returnproducts/return.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-returnproductform',
  templateUrl: './returnproductform.component.html',
  styleUrls: ['./returnproductform.component.scss']
})
export class ReturnproductformComponent implements OnInit {
  returnForm:FormGroup
  id
  Name
  location
  constructor( private fb:FormBuilder, private returnService:ReturnService,private toster:ToastrService) { 
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
  }

  ngOnInit() {
    
    this.returnForm= this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      itemCode :[''],
      description :[''],
      supplierName :[''],
      hsnCode :[''],
      returnproduct :[''],
      vom:[''],
      returnstatus:['']
    })
    var local = localStorage.getItem('return');
    this.returnForm.patchValue(JSON.parse(local))
  }
  onSubmit(value){
  
    if(value._id===''){
      this.returnService.postReturn(value).subscribe(data=>{
        console.log(data)
        this.toster.success('added successfully');

      })
    }else
     this.returnService.putReturn(value).subscribe(data=>{
       console.log(data)
       this.toster.success('updated successfully');

     })
  }

}
