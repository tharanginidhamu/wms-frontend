import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { ExpenseService } from "../../tables/expense/expense.service";
// import { NotifyService } from "../../services/notify.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-secuform',
  templateUrl: './secuform.component.html',
  styleUrls: ['./secuform.component.scss']
})
export class SecuformComponent implements OnInit {
  vechicleForm:FormGroup
  getvalue
  params
  userid
  key
  getid
  branch
id
Name
location
sale
  constructor(private router:Router,private fb:FormBuilder,private security:ExpenseService,
    private route:ActivatedRoute,private toastr: ToastrService) { 
    //   this.route.paramMap.subscribe(params => {
    //     this.params = params.get('userauth');
    //   var ukg=  JSON.parse(localStorage.getItem('authdata')) 
    //   this.branch=ukg.branchId
    // });
    var us = JSON.parse( localStorage.getItem('user'))
    us.forEach(element => {
      this.id=element.branchId
      this.Name=element.branchName
      this.location=element.branchLocation
    });
    }

  ngOnInit() {
    this.vechicleForm=this.fb.group({
      _id:[''],
      branchId:this.id,
      branchName:this.Name,
      branchLocation:this.location,

      date:[''],
      vehicleNo:[''],
      time:[''],
      driverName:[''],
      cleanerName:[''],
      transportationName:[''],
      mobileNo:[''],
      dlNo:[''],
      type:[''],
     
    })
   
    this.route.paramMap.subscribe(params => {
      this.params = params.get('userauth');
      this.userid=params
      this.key=this.userid.params._id
      console.log(this.userid.params._id,'userdata')
    });
    // this.security.getsec(this.key).subscribe(params => {
    //  this.getid=params
    //  this.getid.forEach(element => {
    //   this.update( element);
    //  });
    
    // });
    this.sale=JSON.parse(localStorage.getItem('key'))

    this.update(this.sale)

  }
  onSubmit(val) {
    if (val._id=='') {
      this.security.postsecurity(val).subscribe(data=> {
        console.log(data,'supmit')
        this.toastr.success('Added Successfully');
        location.reload();
        // this.notify.addCount()
       })
      // 
      
    } else {
      this.security.editsecurity(val).subscribe(data=> {
        console.log(data,'supmit')
        this.toastr.success('updated Successfully');
        location.reload();

       })
    }
   

   }
   update(val) {
    console.log(val,'UPDATE')
    this.vechicleForm.patchValue(val);
    
    }


}
