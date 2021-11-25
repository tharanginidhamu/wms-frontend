import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SupplierService } from "./supplier.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {
   getSupplier;
   checklist=[]
   Excel=[]
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
  constructor(private router:Router, private supplierService:SupplierService,
    private toster:ToastrService,private excelService:ExcelService) { }

  ngOnInit() {
    this.supplierService.getSupplier().subscribe(data=>{
      this.getSupplier=data
      console.log(this.getSupplier,'fvsd')
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
  supplierform()
  {
    localStorage.removeItem('sup')
    this.router.navigate(['/supplier/suppliers/supplierdetails'])
  }
  editSupplier(value){
    localStorage.setItem('sup', JSON.stringify(value))
    this.router.navigate(['/supplier/suppliers/supplierdetails'])
  }
  deleteSupplier(id){
    this.supplierService.delete(id).subscribe(data=>{
      console.log(data)
      this.toster.success('deleted successfully');

    })
  }
  getValue( value,isChecked: boolean){
  
    if(isChecked){
      this.checklist.push(value);
    }else{
      let index = this.checklist.indexOf(value);
            this.checklist.splice(index,1);
    } 
   
    console.log(this.checklist)
    }

    exportToExcel(event) {
      console.log(this.checklist,'check')
      if (this.checklist.length==0) {
        this.Excel=[]
        event.forEach(dat => {
      var CustomerName =dat.name
      var ContactNumber=dat.contactNumber
      var BillAddress=dat.billAddress
      var ShipAddress=dat.shipAddress
      var GSTnumber=dat.cost    
      var obj=Object.assign({CustomerName,ContactNumber,BillAddress,ShipAddress,GSTnumber})
      this.Excel.push(obj)
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
          var CustomerName =dat.name
          var ContactNumber=dat.contactNumber
          var BillAddress=dat.billAddress
          var ShipAddress=dat.shipAddress
          var GSTnumber=dat.cost    
          var obj=Object.assign({CustomerName,ContactNumber,BillAddress,ShipAddress,GSTnumber})
          this.Excel.push(obj)
        
      });
   
      console.log(this.Excel,'else')

         this.excelService.exportAsExcelFile( this.Excel, 'persons');
      }
    
    }

}
