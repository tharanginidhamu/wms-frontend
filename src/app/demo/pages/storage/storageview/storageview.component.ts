import { Component, OnInit } from '@angular/core';
import { param } from 'jquery';
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-storageview',
  templateUrl: './storageview.component.html',
  styleUrls: ['./storageview.component.scss']
})
// type Params = {
//   [key: string]: any;
// };
// @params keyGetter
// @param list
// @returns Map of the array grouped by the grouping function.
export class StorageviewComponent implements OnInit {
  rack
  rackarry=[]
  finalRack
  divison=[]
  div=[]
  rac
  rackar=[]
  finalrack=[]
  rackfilter=[];
  filtered
  selected
  finalRackArray=[]
  percent=[]
  final=[]
  on=[]
  division
  kgf
  dic=[]
  constructor(private storageService:StorageService) { }

  ngOnInit() {
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
     this.finalRack.forEach(dat=>{
      
        this.divison.push({division:dat.division})
       
      })
      this.div=this.divison

      console.log(this.div,'divi');
    // const result = Array.from(this.finalRack.reduce((m, t) => m.set(t.name, t), new Map()).values());

       })
      
        this.storageService.getDivision().subscribe(data=>{
       this.rac=data;
       this.rac.forEach(element => {
        this.rackar.push(element)
       });
       this.rackar.forEach(dat=>{
        var abc=  ((dat.used/dat.quantity)*100).toFixed(2)
          // console.log(this.abc,this.getdata,'daaa')
          this.percent.push({division:dat.division,avalible:dat.avalible,quantity:dat.quantity,
            rack:dat.rack,selected:dat.selected,used:dat.used,percentage:abc
          })
         
        })
       var list=this.percent
       const grouped =this.groupBy(list, pet => pet.division);
this.kgf=grouped
this.dic=this.kgf
this.div.forEach(dat=>{
  var one = grouped.get(dat.division)
  this.on.push({division:dat.division,array:one})
 
})
console.log(this.on,'on');   
     

          console.log(this.dic,'kk');
    
         })
     
  }
  // get grouped() { return Array.from(this.dic.entries()); }
   groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}
//   onOptionsSelected(){
//     this.rackfilter=[];
//     this.finalRackArray=[];

//     this.filtered = this.rackarry.filter(t=>t.division===this.selected.division);

//     console.log(this.filtered)
//     this.filtered.forEach(data=>{
//       this.division=data.division
//      this.rackfilter.push(data)
//    })
//     const div=this.rackfilter.reduce((acc, val) => {
//      if (!acc.find(el => el.rack === val.rack)) {
//        acc.push(val);
//      }
//      return acc;
//    }, []);
//     div.forEach(element => {

//  this.finalRackArray.push(element)
//    });
//    this.percent=[]
//    this.final=[]
//    this.finalRackArray.forEach(dat=>{
//     var abc=  ((dat.used/dat.quantity)*100).toFixed(2)
//       // console.log(this.getdata,'daaa')
//       this.percent.push({division:dat.division,avalible:dat.avalible,quantity:dat.quantity,
//         rack:dat.rack,selected:dat.selected,used:dat.used,percentage:abc
//       })
     
//     })
//   this.final=this.percent
//   console.log(this.final,'daaa')
//   // this.dtTrigger.next();
//    console.log(this.filtered)
//   }


}
