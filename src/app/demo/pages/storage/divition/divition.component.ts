import { Component, OnInit } from '@angular/core';
import { StorageService } from "../storage.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-divition',
  templateUrl: './divition.component.html',
  styleUrls: ['./divition.component.scss']
})
export class DivitionComponent implements OnInit {
  selected:any;
  filtered :any;
  filterValue:any;
  filterValuee:any;
  receiptform:FormGroup
  divisionShow:boolean=false;
  racksShow:boolean=false;
  division;
  rack;
  arr=[];
  finalDiv;
  rackarry=[];
  rackfilter=[];
  finalRackArray=[];
  finalRack;
  constructor( private storageService:StorageService, private toster:ToastrService, private fb:FormBuilder) { }

  ngOnInit() {
    this.receiptform=this.fb.group({
      _id:[''],
      division:[''],
      rack:[''],
      quantity:[''],
      used:[''],
      avalible:[''],
    })
    this.storageService.getRack().subscribe(data=>{
      this.division=data;
      this.division.forEach(element => {
      this.arr.push(element)
      });
      let div=this.arr.reduce((acc, val) => {
        if (!acc.find(el => el.division === val.division)) {
          acc.push(val);
        }
        return acc;
      }, []);
       this.finalDiv=div
    })
 this.getRackData();
  }
  addDivision(value){
  this.storageService.postDivision(
    {
      division:value.division,
      rack:value.rack,
      quantity:value.quantity,
      used:0,
      avalible:value.quantity,

    }
    ).subscribe(data=>{
    console.log(data)
    this.toster.success('added successfully');

  })
  }
  getRackData(){
    this.storageService.getDivision().subscribe(data=>{
   this.rack=data;
   this.rack.forEach(element => {
    this.rackarry.push(element)
   });
   let div=this.rackarry.reduce((acc, val) => {
    if (!acc.find(el => el.division === val.division)) {
      acc.push(val);
    }
    return acc;
  }, []);
  this.finalRack=div;

    })
  }

onOptionsSelected() {
    console.log(this.selected);
    this.rackfilter=[];
    this.finalRackArray=[];
   this.filtered = this.rackarry.filter(t=>t.division===this.selected.division);
   this.divisionShow=true;
   this.racksShow=false;
console.log(this.filtered)
  this.filtered.forEach(data=>{
    this.rackfilter.push(data)
  })
  let div=this.rackfilter.reduce((acc, val) => {
    if (!acc.find(el => el.rack === val.rack)) {
      acc.push(val);
    }
    return acc;
  }, []);
  div.forEach(element => {
this.finalRackArray.push(element)
  });
  console.log(this.finalRackArray)
}
onSelected() {
  console.log(this.arr,'arr')
this.filterValuee = this.arr.filter(t=>t.rack===this.filterValue.rack);
console.log(this.filterValue.rack);
this.divisionShow=false;
this.racksShow=true;
}

}
