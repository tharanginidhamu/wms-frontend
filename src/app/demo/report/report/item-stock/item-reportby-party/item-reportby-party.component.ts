import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SalesService } from '../../../../pages/sales/sales.service';
import { PurchaseService } from '../../../../extra/sample-page/purchase.service';
import { ReturnService } from "../../../../pages/sales/returnproducts/return.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-item-reportby-party',
  templateUrl: './item-reportby-party.component.html',
  styleUrls: ['./item-reportby-party.component.scss']
})
export class ItemReportbyPartyComponent implements OnInit {
  getProduct;
  stockOut;
  val;
  final;
  Excel=[]
  purchase;
  returnProducts
  invoice;
  stock = [];
  stockAva = [];
  stockAvaa = [];
  finalStock;
  finalValue;
  retproduct
  ret=[]
  repro=[]
  itemin=[]
  itemout=[]
  checkout=[]
stockfinal
  returnpo
   stockAvalibility=[];
  getData;
  name
  date
  checkif
  arr=[]
  itemcode=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 

  isDtInitialized:boolean = false
  constructor(private router: Router,
    private stockService: SalesService, private purchaseService: PurchaseService,
    private returnservice:ReturnService,
    private excelService:ExcelService) { }

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
  exportToExcel(event) {
    this.ret=[]
    this.stockAva=[]
    this.stockAvalibility=[]
    this.stock=[]
    this.itemin=[]
    this.itemout=[]
    this.arr=[]
    this.itemcode=[]
    this.Excel=[]
    this.stockService.getInvProduct().subscribe(data => {
      this.stockOut = data;
      this.stockOut.forEach(dataa => {
       this.final = dataa.products;
       this.final.forEach(dat => {
         this.stock.push(dat);
       });
      });
      const res = this.stock.reduce((acc, obj) => {
     const existItem = acc.find(item => item.itemCode === obj.itemCode);
     if (existItem) {
       existItem.custQuantity += obj.custQuantity;
       return acc;
     }
     acc.push(obj);
     return acc;
    }, []);
      this.finalStock = res;
     //  console.log(res,'prod')
      this.finalStock.forEach(data => {
        this.stockAva.push(data);
      });
      this.checkout=this.stockAva
      this.checkout.forEach(dataa => {
        var ItemCode=dataa.itemCode
        var ItemName=dataa.description
         var ItemOut=dataa.custQuantity
        var ItemIn=0
      var Balance=0
      var Total=0
        var obj=Object.assign({ItemCode,ItemName,ItemOut,Balance,ItemIn,Total })
        this.itemout.push(obj)
       
      });
    
       this.invoice = event.invoice;
      this.invoice.forEach(dataa => {
        var ItemCode=dataa.itemCode
        this.itemcode.push(ItemCode)
      });
      this.arr=[]
      const emp = this.itemcode;
      const filteredArray = this.itemout.filter(function(itm) {
        return emp.indexOf(itm.ItemCode) > -1;
            });
      this.arr = filteredArray;
     
       this.invoice.forEach(dataa => {
         var ItemCode=dataa.itemCode
         var ItemName=dataa.description
         var ItemIn=dataa.custQuantity
         var Total=dataa.total
         var ItemOut=0
         var Balance=0
         var obj=Object.assign({ItemCode,ItemName,ItemIn,ItemOut,Balance,Total })
         this.arr.push(obj)
      });
      this.itemin=[]
      const finalstock=this.arr.reduce((ac, jj) => {
        const existItem = ac.find(item => item.ItemCode === jj.ItemCode);
        if (existItem) {
          
          existItem.ItemOut+=jj.ItemOut
           existItem.ItemIn+=jj.ItemIn
           existItem.Total+=jj.Total
          // existItem.Balance+=jj.Balance;

          return ac;
        }
        ac.push(jj);
        return ac;
       }, []);
       this.stockfinal=finalstock
      //  console.log(this.stockfinal,'finalstock')
       this.stockfinal.forEach(data=>{
    
        data.ItemIn=Math.abs(data.ItemIn)
        data.ItemOut=Math.abs(data.ItemOut)
        data.Total=Math.abs(data.Total)
        // data.Balance=Math.abs(data.Balance)

         this.itemin.push(data)
        
      })
      this.itemin.forEach(data=>{
    return data.Balance=data.ItemIn-data.ItemOut
      })
      // console.log(this.itemin,'stock')
    
   
    var InvoiceNumber =event.invoiceNo
    var Date=event.date
    var Supplier=event.supplier
   
   this.itemin.forEach(data => {
      var ItemCode=data.ItemCode
      var ItemName = data.ItemName
      var ItemIn=data.ItemIn
      var Balance=data.Balance
      var Total=data.Total
      var obj=Object.assign({InvoiceNumber,Date,Supplier,ItemCode,ItemName,ItemIn,Balance,Total})
      this.Excel.push(obj)
    });
    console.log(this.Excel,'prod')
     this.excelService.exportAsExcelFile( this.Excel, 'persons');
  });
  
   
  }
}
