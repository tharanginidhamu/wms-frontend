import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { StockavaService } from "../stockava.service";
@Component({
  selector: 'app-stockavailform',
  templateUrl: './stockavailform.component.html',
  styleUrls: ['./stockavailform.component.scss']
})
export class StockavailformComponent implements OnInit {
  stockAva:FormGroup
  fromdate = new FormControl();
  enddate = new FormControl();

  constructor( private fb:FormBuilder, private stockService:StockavaService,private toster:ToastrService) { }

  ngOnInit() {
    this.stockAva=this.fb.group({
      _id:[''],
      itemCode:[''],
      description:[''],
      unitPrice:[''],
      vom:[''],
      quantity:['']
    })
    var retrievedObject = localStorage.getItem('stock');

    this.stockAva.patchValue(JSON.parse(retrievedObject))
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
