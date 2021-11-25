import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from './loan.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cashin-bank',
  templateUrl: './loanaccount.component.html',
  styleUrls: ['./loanaccount.component.scss']
})
export class LoanBankComponent implements OnInit {
  getCashinhand;
  emi=false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router:Router,
    private loanService:BankService,
    private toster:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.loanService.getBankdetails().subscribe(data=>{
      console.log(data);
      this.getCashinhand=data;
      this.dtTrigger.next();
    })
  }
  addEmi(value)
  {
    localStorage.removeItem('loan')
    this.emi=true
    localStorage.setItem('emi',JSON.stringify(this.emi));
    localStorage.setItem('loan',JSON.stringify(value));
    this.router.navigate(['/cashin/loan/bankform']) 
    // this.router.navigate(['adddetails']);
  }
  addforms(){
    this.router.navigate(['/cashin/loan/bankform']) 

  }
  addform(value)
  {
    localStorage.removeItem('emi')
    localStorage.removeItem('loan')
    this.emi=false
    localStorage.setItem('emi',JSON.stringify(this.emi));

    this.router.navigate(['/cashin/loan/bankform']) 
    // this.router.navigate(['adddetails']);
  }
  editcashinhand(value)
  {
    localStorage.removeItem('emi')
    localStorage.removeItem('loan')
    this.emi=false
    localStorage.setItem('emi',JSON.stringify(this.emi));
    localStorage.setItem('loan',JSON.stringify(value));
    this.router.navigate(['/cashin/loan/bankform']) 
  }
  deletecashinhand(id){
    this.loanService.deleteBankdetails(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
   