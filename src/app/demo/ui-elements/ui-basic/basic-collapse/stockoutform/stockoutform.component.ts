import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { StockoutService } from "../stockout.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stockoutform',
  templateUrl: './stockoutform.component.html',
  styleUrls: ['./stockoutform.component.scss']
})
export class StockoutformComponent implements OnInit {
  stockOut:FormGroup
  constructor( private fb:FormBuilder, private stockService:StockoutService,private toster:ToastrService) { }

  ngOnInit() {
    this.stockOut=this.fb.group({
      _id:[''],
      itemCode:[''],
      description:[''],
      unitPrice:[''],
      vom:[''],
      quantity:['']
    })
    var retrievedObject = localStorage.getItem('stockout');

    this.stockOut.patchValue(JSON.parse(retrievedObject))
  }
  onSubmit(value){
    if(value._id===''){
      this.stockService.postStock(value).subscribe(data=>{
        console.log(data)
        this.toster.success('added successfully');

      })
    }else{
        this.stockService.putStock(value).subscribe(data=>{
          console.log(data)
          this.toster.success('updated successfully');

        })
      }
  }

}
