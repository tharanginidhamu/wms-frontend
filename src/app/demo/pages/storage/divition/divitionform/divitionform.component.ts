import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { StorageService } from "../../storage.service";
@Component({
  selector: 'app-divitionform',
  templateUrl: './divitionform.component.html',
  styleUrls: ['./divitionform.component.scss']
})
export class DivitionformComponent implements OnInit {
  receiptform:FormGroup;
  division;
  filtered :any;
  filterValue:any;
  arr=[];
  finalDiv;
  selected:any;
  rack;
  itemQuantity:number;
  rackarry=[];
  rackfilter=[];
  finalRackArray=[];
  finalRack;
  constructor( private fb:FormBuilder, private toster:ToastrService,private storageService:StorageService) { }

  ngOnInit() {
    this.receiptform=this.fb.group({
      _id:[''],
      rack:[''],
      division:[''],
      quantity:[''],
       racksize:[''],
       itemCode:[''],
       reciptno:[''],
       description:[''],
       vom:[''],
       used:[''],
       avalible:['']
    })
    var pcData= JSON.parse(localStorage.getItem('pc'))
    this.receiptform.patchValue(pcData);

    this.storageService.getDivision().subscribe(data=>{
      this.division=data;
      this.division.forEach(element => {
      this.arr.push(element)
      });
      const div=this.arr.reduce((acc, val) => {
        if (!acc.find(el => el.division === val.division)) {
          acc.push(val);
        }
        return acc;
      }, []);
      this.finalDiv=div
    })
    this.getRackData();
  }

  getRackData(){
    this.storageService.getDivision().subscribe(data=>{
   this.rack=data;
   this.rack.forEach(element => {
    this.rackarry.push(element)
   });

    })
  }
  onOptionsSelected(){
    this.rackfilter=[];
    this.finalRackArray=[];
    this.filtered = this.rackarry.filter(t=>t.division===this.selected.division);
    console.log(this.filtered)
    this.filtered.forEach(data=>{
     this.rackfilter.push(data)
   })
    const div=this.rackfilter.reduce((acc, val) => {
     if (!acc.find(el => el.rack === val.rack)) {
       acc.push(val);
     }
     return acc;
   }, []);
    div.forEach(element => {
 this.finalRackArray.push(element)
   });
  }
  onSelected(){
// alert(this.filterValue.quantity)
console.log(this.filterValue)
this.receiptform.patchValue({
  racksize:this.filterValue.quantity,
  avalible:this.filterValue.avalible
})
  }

     addDivision(value){
    if(this.filterValue.avalible>=this.itemQuantity){
      this.storageService.postRack(
        {
          _id:value._id,
          rack:this.filterValue.rack,
          division:this.selected.division,
          quantity:value.quantity,
          description:value.description,
          itemCode:value.itemCode,
          racksize:value.racksize,
          reciptno:value.reciptno,
          vom:value.vom
        }
      ).subscribe(data=>{
        this.toster.success('added successfully');

        console.log(data)
      })
      this.storageService.putDivision({
        _id:this.filterValue._id,
        division:this.filterValue.division,
        rack:this.filterValue.rack,
        quantity:this.filterValue.quantity,
        used:this.filterValue.used+this.itemQuantity,
        avalible:this.filterValue.avalible-this.itemQuantity
      }).subscribe(data=>{
        this.toster.success('edit successfully');

        console.log(data)

      })
      localStorage.removeItem('pc')
    }else{
      alert('Avalible space less then quantity')
    }
  }
}
