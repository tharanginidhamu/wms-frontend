import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../extra/sample-page/purchase.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";
import { FormBuilder, FormGroup ,FormControl} from "@angular/forms";


@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  getProduct;
  inward;
  monthly=[]
  stockInv=[];
sss
key:boolean=false
pro
checklist=[]
Excel=[]
datefilter=[]
tdate
fdate
cati=[]
fromdate = new FormControl();
enddate = new FormControl();
  dtElement: DataTableDirective;

isDtInitialized:boolean = false

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private purchaseService: PurchaseService,private excelService:ExcelService) {

  }

  ngOnInit() {
    this.purchaseService.getPurchaseData().subscribe(data => {
      this.getProduct = data;
      console.log(this.getProduct,'get product');

      this.getProduct.forEach(dataa => {
         this.inward = dataa.invoice;
         
          // console.log(this.inward,dataa.invoice,'invoice');

         this.inward.forEach(value=>{
           this.stockInv.push(value)
          
         })
         this.datefilter=this.stockInv
      });
      // console.log(this.cati,'cati');
      this.dtTrigger.next();
      // if (this.isDtInitialized) {
      //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //     dtInstance.destroy();
      //     this.dtTrigger.next();
      //   });
      // } else {
      //   this.isDtInitialized = true
      //   this.dtTrigger.next();
      // }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  setchange(selectedvalue) {
    this.key=true
    this.stockInv=[]
    this.sss = selectedvalue;
    const emp = [this.sss];
    this.purchaseService.getPurchaseData().subscribe(data => {
      this.getProduct = data;
      console.log(this.getProduct,'get product');
      const filteredArray = this.getProduct.filter(function(itm) {
        return emp.indexOf(itm.month) > -1;
            });
      this.pro = filteredArray;
      
     
       
      this.pro.forEach(dataa => {
         this.inward = dataa.invoice;
          // console.log(this.inward,dataa.invoice,'invoice');

         this.inward.forEach(value=>{
           this.stockInv.push(value)
          
         })
        
      

      });
      this.datefilter= this.stockInv
      this.dtTrigger.next();
      // if (this.isDtInitialized) {
      //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //     dtInstance.destroy();
      //     this.dtTrigger.next();
      //   });
      // } else {
      //   this.isDtInitialized = true
      //   this.dtTrigger.next();
      // }  
    });
   
    
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
  
      var resultProductData = this.stockInv.filter(function(a) {
        return new Date(a.invDate) >= startDate && new Date(a.invDate) <= endDate
      });
      this.datefilter=resultProductData
      console.log(resultProductData,'selected data');
      }
}
