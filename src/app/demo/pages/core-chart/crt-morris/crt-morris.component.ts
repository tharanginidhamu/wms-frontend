import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import { AddproductService } from "./addproduct.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-crt-morris',
  templateUrl: './crt-morris.component.html',
  styleUrls: ['./crt-morris.component.scss']
})

export class CrtMorrisComponent implements OnInit {
getProduct;
Excel=[]
checklist=[]
dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private addproductService:AddproductService,
    private toster:ToastrService,private excelService:ExcelService) { }

  ngOnInit() {
    this.addproductService.getProduct().subscribe(data=>{
      console.log(data)
      this.getProduct=data;
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
  addproduct(){
    localStorage.removeItem('pro')
    this.router.navigate(['/products/product/addproducts'])
  }
  editProduct(value){
    localStorage.setItem('pro',JSON.stringify(value))
    this.router.navigate(['/products/product/addproducts'])
  }
  deleteProduct(id){
    this.addproductService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.toster.success('delete successfully');

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
      var ItemCode =dat.itemCode
      var Description=dat.description
      var HSNCode=dat.hsnCode
      var Quantity=dat.quantity
      var vom=dat.vom
      var UnitRate=dat.unitRate
      var CGST=dat.CGST
      var SGST=dat.SGST
      var Total=dat.total
     
    
      var obj=Object.assign({ItemCode,Description,HSNCode,Quantity,vom,UnitRate,CGST,SGST,Total})
      this.Excel.push(obj)
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
          var ItemCode =dat.itemCode
          var Description=dat.description
          var HSNCode=dat.hsnCode
          var Quantity=dat.quantity
          var vom=dat.vom
          var UnitRate=dat.unitRate
          var CGST=dat.CGST
          var SGST=dat.SGST
          var Total=dat.total
         
        
          var obj=Object.assign({ItemCode,Description,HSNCode,Quantity,vom,UnitRate,CGST,SGST,Total})
          this.Excel.push(obj)
      });
   
      console.log(this.Excel,'else')

         this.excelService.exportAsExcelFile( this.Excel, 'persons');
      }
    
    }

}
