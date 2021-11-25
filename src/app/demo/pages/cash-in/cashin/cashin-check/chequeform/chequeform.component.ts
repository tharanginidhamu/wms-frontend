import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ChequeService } from '../cheque.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chequeform',
  templateUrl: './chequeform.component.html',
  styleUrls: ['./chequeform.component.scss']
})
export class ChequeformComponent implements OnInit {
  chequeForm:FormGroup
  id
  Name
  location
  constructor(private router:Router,private fb:FormBuilder,private chequeService:ChequeService,  private toster:ToastrService) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
   }

  ngOnInit() {
    this.chequeForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,
      bankBranch:[''],
      chequeNumber:[''],
      accountNumber:[''],
      dateonCheque:[''],
      amount:[''],
      beneficiary:[''],
      presentedOn:[''],
      remarks:['']
    })
    let che=localStorage.getItem('setvalue');
    let ch=JSON.parse(che);
    this.chequeForm.patchValue(ch);
  }
  onsubmit(value){
    if(value._id===''){
      this.chequeService.postCheque(value).subscribe(data=>{
        console.log(data);
        this.toster.success('added successfully');

      })
      localStorage.removeItem('setvalue')

    }
    else{
      this.chequeService.putCheque(value).subscribe(data=>{
        console.log(data);
        this.toster.success('updated successfully');

      })
      localStorage.removeItem('setvalue')

    }
  }

}
