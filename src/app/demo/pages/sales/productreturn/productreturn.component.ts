import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReturnService } from "../returnproducts/return.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productreturn',
  templateUrl: './productreturn.component.html',
  styleUrls: ['./productreturn.component.scss']
})
export class ProductreturnComponent implements OnInit {
getProducts;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private returnService:ReturnService,private toster:ToastrService) { }

  ngOnInit() {
    this.returnService.getReturn().subscribe(data=>{
     this.getProducts=data;
     this.dtTrigger.next();

    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  returnform(){
    localStorage.removeItem('return');
    this.router.navigate(['/saless/return/returnform'])
  }
  editReturn(value){
    localStorage.setItem('return', JSON.stringify(value));
    this.router.navigate(['/saless/return/returnform'])
  }
  deleteReturn(id){
    this.returnService.deleteReturn(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
