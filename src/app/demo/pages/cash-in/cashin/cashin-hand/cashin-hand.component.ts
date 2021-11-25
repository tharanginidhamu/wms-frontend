import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandService } from './hand.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cashin-hand',
  templateUrl: './cashin-hand.component.html',
  styleUrls: ['./cashin-hand.component.scss']
})
export class CashinHandComponent implements OnInit {
  getCashinhand;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router:Router,
    private handService:HandService,
    private toster:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.handService.getCashinhand().subscribe(data=>{
      console.log(data);
      this.getCashinhand=data;
      this.dtTrigger.next();
    })
  }
  addforms(){
    this.router.navigate(['/cashin/cashin-hand/cashform'])
  }
  addform(value)
  {
    localStorage.removeItem('setcash')

    this.router.navigate(['/cashin/cashin-hand/cashform'])    
    // this.router.navigate(['adddetails']);
  }
  editcashinhand(value)
  {
    localStorage.setItem('setcash',JSON.stringify(value));
    this.router.navigate(['/cashin/cashin-hand/cashform']) 
  }
  deletecashinhand(id){
    this.handService.deleteCashinhand(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
