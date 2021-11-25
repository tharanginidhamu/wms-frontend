import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReceiveService } from './receive.service';
// import { ReceivingService } from '../receiving.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-receving-pc',
  templateUrl: './receving-pc.component.html',
  styleUrls: ['./receving-pc.component.scss']
})
export class RecevingPCComponent implements OnInit {
  getdata;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
id
  constructor(private http:HttpClient, private router:Router,private receivingservice: ReceiveService, 
    private toster:ToastrService) { 
      var us = JSON.parse( localStorage.getItem('user'))
      us.forEach(element => {
        this.id=element.branchId
      });
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.receivingservice.getProduct().subscribe(data=>{
      console.log(data)
      this.getdata=data;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  addform(){
    localStorage.removeItem('arf')
    this.router.navigate(['receiving/receiveform'])
  }

  editEx(value){
    localStorage.setItem('arf',JSON.stringify(value))
    this.router.navigate(['receiving/receiveform'])
  }
  delpc(id){
    this.receivingservice.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.toster.success('delete successfully');

    })
  }
}
