import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
// import { secureService } from "./security.service";
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from "../tables/expense/expense.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  vechicleForm:FormGroup
getvalue
params
userid
key
getid
branch
roll
id
Name
location
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

  constructor(private router:Router,private fb:FormBuilder,private toastr: ToastrService,private security: ExpenseService,
   private route:ActivatedRoute) {
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
    }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.params = params.get('userauth');
    // var ukg=  JSON.parse(localStorage.getItem('authdata')) 
    // this.branch=ukg.branchId
    // this.roll=ukg.role
    // var  bid= this.branch
    this.security.getsecurity().subscribe(data=>{
      this.getvalue=data
      this.dtTrigger.next();

      console.log(data,'unloading  ')
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    // })
  }
  addforms(){
    localStorage.removeItem('secu')

    this.router.navigate(['security/securityform'])
      }
    
     
      edit(datas){
        console.log(datas,'edit  ')
        localStorage.setItem('secu',JSON.stringify(datas))

    this.router.navigate(['security/securityform'+'/'+datas._id])
    
      }
    
      deleteOrder(index){
        this.security.deletesecurity(index).subscribe(data=>{
          this.toastr.success('deleted Successfully');
          location.reload();
          console.log(data,'unloading  ')
     
        })
       
    
      }
}
