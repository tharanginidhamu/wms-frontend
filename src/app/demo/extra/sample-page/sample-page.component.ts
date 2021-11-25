import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PurchaseService } from "./purchase.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  getData;
  name
  date
  invoice
  checklist=[]
  Excel=[]
  arr=[]
  val=false;
  fdate
  tdate
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private purchaseService:PurchaseService,
    private toster:ToastrService,private excelService:ExcelService) { }

  ngOnInit() {
    this.purchaseService.getPurchaseData().subscribe(data=>{
     this.getData=data;
     console.log(this.getData)
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
  addform(){
    localStorage.removeItem('key');
    this.router.navigate(['/purchase/form'])
  }
  show(val){
    this.val=true;
this.name=val.supplier
this.date=val.date
this.invoice=val.invoiceNo
this.arr=val.invoice
    console.log(val,'show')
  }
  back(){
this.val=false ;
 }
  editPurchase(value){
    localStorage.setItem('key', JSON.stringify(value))
    this.router.navigate(['/purchase/form']);
  }
  DeletePurchase(id){
    this.purchaseService.deletePurchaseData(id).subscribe(data=>{
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

      dat.invoice.forEach(da => {
            var SupplierName =dat.supplierName
            var InvoiceNo=dat.invoiceNo
            var ItemCode=da.itemCode
            var InvoiceDate=da.invDate
            var Quantity=da.custQuantity
        var Description =da.description
        var InvoiceAmount=dat.invoiceAmount
        var obj=Object.assign({SupplierName,InvoiceNo,InvoiceDate,ItemCode,Description,Quantity,InvoiceAmount})

        this.Excel.push(obj)
      });
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
          dat.invoice.forEach(da => {
            var SupplierName =dat.supplierName
            var InvoiceNo=dat.invoiceNo
            var ItemCode=da.itemCode
            var InvoiceDate=da.invDate
            var Quantity=da.custQuantity
        var Description =da.description
        var InvoiceAmount=dat.invoiceAmount
        var obj=Object.assign({SupplierName,InvoiceNo,InvoiceDate,ItemCode,Description,Quantity,InvoiceAmount})

        this.Excel.push(obj)
      });
    })
      console.log(this.Excel,'else')

         this.excelService.exportAsExcelFile( this.Excel, 'persons');
      }
    
    }

    from(event){
      this.fdate=event
      console.log(event,'fromdate')
    
    }
    to(event){
      this.tdate=event
      console.log(event,'fromdate')
     this.Date();
    }
   Date() {
    let start = "2020-11-01";
    let end = "2020-11-30";
    
    var startDate = new Date( this.fdate);
    var endDate = new Date( this.tdate);

    // var resultProductData = this.getSupplier.filter(function(a) {
    //   return new Date(a.supplierDate) >= startDate && new Date(a.supplierDate) <= endDate
    // });
    // this.datefilter=resultProductData
    // console.log(resultProductData,'selected data');
     }
}


