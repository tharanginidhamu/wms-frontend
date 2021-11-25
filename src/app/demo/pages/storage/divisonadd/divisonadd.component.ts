import { Component, OnInit } from '@angular/core';
import { StorageService } from "../storage.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-divisonadd',
  templateUrl: './divisonadd.component.html',
  styleUrls: ['./divisonadd.component.scss']
})
export class DivisonaddComponent implements OnInit {
abc
percent=[]
final=[]
  constructor( private http:HttpClient, private router:Router, private storageService:StorageService,
    private toster:ToastrService,    private fb:FormBuilder) { }
  getdata;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.storageService.getDivision().subscribe(data=>{
     
      this.getdata=data;  

      
      this.getdata.forEach(dat=>{
      var abc=  ((dat.used/dat.quantity)*100).toFixed(2)
        console.log(this.abc,this.getdata,'daaa')
        this.percent.push({division:dat.division,avalible:dat.avalible,quantity:dat.quantity,
          rack:dat.rack,selected:dat.selected,used:dat.used,percentage:abc
        })
       
      })
    this.final=this.percent
    this.dtTrigger.next();
    })
 

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  editEx(){
    // localStorage.setItem('divi',JSON.stringify(value))
    this.router.navigate(['/storage/createdivison/creatingdivision'])
  }
  // delpc(id){
  //   this.receivingservice.deleteProduct(id).subscribe(data=>{
  //     console.log(data)
  //   })
  // }

  addform(){
    this.router.navigate(['/storage/createdivison/creatingdivision'])
  }
}
