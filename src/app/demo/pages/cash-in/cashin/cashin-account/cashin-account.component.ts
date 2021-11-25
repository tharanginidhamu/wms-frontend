import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cashin-account',
  templateUrl: './cashin-account.component.html',
  styleUrls: ['./cashin-account.component.scss']
})
export class CashinAccountComponent implements OnInit {
  getBankdetails
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router:Router,
    private accountService:AccountService,
    private toster:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.accountService.getBankdetails().subscribe(data=>{
      console.log(data);
      this.getBankdetails=data;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  addforms(){
    this.router.navigate(['/cashin/cashin-bank/bankform'])    

  }
  addform(value)
  {
    localStorage.removeItem('setdetails')
    this.router.navigate(['/cashin/cashin-bank/bankform'])    
    // this.router.navigate(['adddetails']);
  }
  editBankdetails(value)
  {
    localStorage.setItem('setdetails',JSON.stringify(value));
    this.router.navigate(['/cashin/cashin-bank/bankform']) 
  }
  deleteBankdetails(id){
    this.accountService.deleteBankdetails(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
