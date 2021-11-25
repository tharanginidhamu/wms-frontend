import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from './cheque.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cashin-check',
  templateUrl: './cashin-check.component.html',
  styleUrls: ['./cashin-check.component.scss']
})
export class CashinCheckComponent implements OnInit {
  getCheque;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router:Router,
    private chequeService:ChequeService,
    private toster:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.chequeService.getCheque().subscribe(data=>{
      console.log(data);
      this.getCheque=data;
      this.dtTrigger.next();
    })
  }
  addforms(){
    this.router.navigate(['/cashin/cashin-cheque/chequeform'])    

  }
  addform(value)
  {
    localStorage.removeItem('setvalue')

    this.router.navigate(['/cashin/cashin-cheque/chequeform'])    
    // this.router.navigate(['adddetails']);
  }
  editCheque(value)
  {
    localStorage.setItem('setvalue',JSON.stringify(value));
    this.router.navigate(['/cashin/cashin-cheque/chequeform'])    
  }
  deleteCheque(id){
    this.chequeService.deleteCheque(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }

}
