import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
// import { AddreceivepcService } from './receivepc.service';
import { HttpClient } from "@angular/common/http";
import { ReceiveService } from '../receving-pc/receive.service'
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-receving-rf',
  templateUrl: './receving-rf.component.html',
  styleUrls: ['./receving-rf.component.scss']
})
export class RecevingRFComponent implements OnInit {
  value;
  addrecpcform:FormGroup;
  getReceivingPc;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router:Router, private http:HttpClient,private receivepcservice:ReceiveService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.receivepcservice.getProduct().subscribe(data=>{
      this.value=data;
      this.dtTrigger.next();
          })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editProduct(val){

    localStorage.setItem('pc', JSON.stringify(val))
    this.router.navigate(['/storage/division/addstock'])
  }
  // deleteProduct(id){
  //   this.receivepcservice.deleteProduct(id).subscribe(data=>{
  //     console.log(data)
  //   })
  // }
}
