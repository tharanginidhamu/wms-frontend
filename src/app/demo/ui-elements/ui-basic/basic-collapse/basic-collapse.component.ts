import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { StockoutService } from './stockout.service';
import { SalesService } from '../../../pages/sales/sales.service';
import { BillingService } from '../../../pages/sales/billing/billing.service'
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup ,FormControl} from "@angular/forms";

import { ExcelService } from "../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-basic-collapse',
  templateUrl: './basic-collapse.component.html',
  styleUrls: ['./basic-collapse.component.scss']
})
export class BasicCollapseComponent implements OnInit {
  getProduct;
  stockOut;
  final;
  checklist=[]
  Excel=[]
  stock = [];
  finalStock;
  key
  stockInv=[]
  sss
  pro
  datefilter=[]
  tdate
  fdate
  fromdate = new FormControl();
enddate = new FormControl();

  dtElement: DataTableDirective;

  isDtInitialized:boolean = false
  
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router,
              private stockService: StockoutService,
              private bilingService: SalesService
              ,private excelService:ExcelService) {

  }

  ngOnInit() {
    this.bilingService.getInvProduct().subscribe(data => {
      this.stockOut = data;
      console.log(this.stockOut, 'out');
      this.stockOut.forEach(dataa => {
        this.final = dataa.products;
        this.final.forEach(dat => {
          this.stock.push(dat);
        });
       });
       this.datefilter=this.stock
       console.log(this.stock, 'outer');
      this.dtTrigger.next();
     });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

  }
  // stockout(){
  //   localStorage.removeItem('key');
  //   this.router.navigate(['/stockmaintenance/outwards/stockoutform'])
  // }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  // stockavail(){
  //   localStorage.removeItem('stockout');
  //   this.router.navigate(['/stockmaintenance/stock/stockavailform'])
  // }
  // editProduct(data){
  //  localStorage.setItem('stockout', JSON.stringify(data))
  //  this.router.navigate(['/stockmaintenance/stock/stockavailform'])

  // }
  // deleteProduct(id){
  // this.stockService.deleteStock(id).subscribe(data=>{
  //   console.log(data)
  // })
  // }

  setchange(selectedvalue) {
    this.key=true
    this.stock=[]
    this.sss = selectedvalue;
    const emp = [this.sss];
    this.bilingService.getInvProduct().subscribe(data => {
      this.stockOut = data;
      console.log(this.stockOut, 'out');
   
      this.stockOut.forEach(dataa => {
        this.final = dataa.products;
        const filteredArray = this.final.filter(function(itm) {
          return emp.indexOf(itm.month) > -1;
              });
        this.pro = filteredArray;
        this.pro.forEach(dat => {
          this.stock.push(dat);
        });
       });
       this.datefilter= this.stock
       console.log(this.stock, 'outer');
      this.dtTrigger.next();
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
          var ItemCode =dat.itemCode
          var Date=dat.idate
          var Description=dat.description
          var HSNCode=dat.hsnCode
          var Quantity=dat.custQuantity 
          var VOM=dat.vom
          var UnitRate=dat.unitRate
          var Total=dat.totalPrice
          var GST=dat.cgstsgst  
          var obj=Object.assign({Date,ItemCode,Description,HSNCode,Quantity,VOM,UnitRate,GST,Total})
          this.Excel.push(obj)
    });
    console.log(this.Excel,'if')
      this.excelService.exportAsExcelFile( this.Excel, 'persons');
      } else {
        this.Excel=[]
        this.checklist.forEach(dat => {
          var ItemCode =dat.itemCode
          var Date=dat.idate
          var Description=dat.description
          var HSNCode=dat.hsnCode
          var Quantity=dat.custQuantity 
          var VOM=dat.vom
          var UnitRate=dat.unitRate
          var Total=dat.totalPrice
          var GST=dat.cgstsgst  
          var obj=Object.assign({Date,ItemCode,Description,HSNCode,Quantity,VOM,UnitRate,GST,Total})
          this.Excel.push(obj)
        
      });
   
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

    var resultProductData = this.stock.filter(function(a) {
      return new Date(a.idate) >= startDate && new Date(a.idate) <= endDate
    });
    this.datefilter=resultProductData
    console.log(resultProductData,'selected data');
    }
}
