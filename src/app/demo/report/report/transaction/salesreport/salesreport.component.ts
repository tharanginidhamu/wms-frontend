import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../../pages/sales/sales.service';
import { PurchaseService } from '../../../../extra/sample-page/purchase.service';
import { Subject } from 'rxjs';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.scss']
})
export class SalesreportComponent implements OnInit {
  getData;
  product = [];
  invoice = [];
  profitData=[];
  final;
  sss;
  mname;
  pro;
  purchaseData;
  getInvoice;
  Excel=[]
  total = [];
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private billingService: SalesService,
     private purchaseService: PurchaseService,
     private excelService:ExcelService) { }

  ngOnInit() {
   
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };

  this.billingService.getInvProduct().subscribe(data => {
    this.getData = data;
    this.product = [];
    console.log(this.getData);
    this.getData.forEach(data => {
      data.products.forEach(dat => {
      this.product.push(dat);
      });
    });
  });
  this.getPurchase();
}
getPurchase() {
this.purchaseService.getPurchaseData().subscribe(data => {
  this.purchaseData = data,
  this.total = [];
  this.purchaseData.forEach(val => {
   this.getInvoice = val.invoice;
   this.getInvoice.forEach(dat => {
    this.total.push(dat);
   });
  });
});
}
setchange(selectedvalue) {
  this.sss = selectedvalue;
 
  this.invoice = [];
  const emp = [this.sss];
  const filteredArray = this.product.filter(function(itm) {
    return emp.indexOf(itm.crntmonth) > -1;
        });
  this.pro = filteredArray;
  this.pro.forEach(data => {
          data.custQuantity = Number.parseInt(data.custQuantity);
          data.invoiceTotal = Number.parseInt(data.invoiceTotal);
          this.invoice.push(data);
        });
  const ava = this.invoice.reduce((accc, objj) => {
          const existItem = accc.find(item => item.itemCode === objj.itemCode);
          if (existItem) {
            existItem.custQuantity += objj.custQuantity;
            existItem.invoiceTotal += objj.invoiceTotal;
            return accc;
          }
          accc.push(objj);
          return accc;
         }, []);
  this.final = ava;
  this.profitData=[];
  this.total.filter(val => {
      this.final.forEach(data => {
      if (data.itemCode === val.itemCode) {
        data.profit=data.invoiceTotal-(val.price*data.custQuantity);
        this.profitData.push(data)
      }
    });
    // this.dtTrigger.next();
  });
   this.dtTrigger.next();
  console.log(this.profitData,'goods');
}

exportToExcel(event) {
  this.Excel=[]
  event.forEach(dat => {
    var Date=dat.idate
    var ItemCode= dat.itemCode
    var Description=dat.description
    var Quantity=dat.custQuantity
    var Total=dat.invoiceTotal
    // var Profit=dat.profit
    var obj=Object.assign({Date,ItemCode,Description,Quantity,Total})
    this.Excel.push(obj)
   });
  this.excelService.exportAsExcelFile( this.Excel, 'persons');
}

}
