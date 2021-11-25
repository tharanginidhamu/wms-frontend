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
  selector: 'app-item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.scss']
})
export class ItemSummaryComponent implements OnInit {
  getProduct;
  stockOut;
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
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 

  isDtInitialized:boolean = false
  constructor(private router: Router,
    private stockService: SalesService, 
    private purchaseService: PurchaseService,
    private returnservice:ReturnService,
    private excelService:ExcelService) { }

  ngOnInit() {
    this.stockService.getInvProduct().subscribe(data => {
      this.stockOut = data;
      // console.log(this.stockOut,'stock')
 
      this.stockOut.forEach(dataa => {
       this.final = dataa.products;
       this.final.forEach(dat => {
         this.stock.push(dat);
       });
      });
      // console.log(this.stock,'finalstock')
 
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
        var obj=Object.assign({ItemCode,ItemName,ItemOut,Balance,ItemIn })
        this.itemout.push(obj)
       
      });
      //  console.log(this.itemout,'itemout')

      // console.log(this.stockAva,'itemoutava')
    
      });
  
    
     this.purchaseService.getPurchaseData().subscribe(data => {
        this.purchase = data;
        this.purchase.forEach(datta => {
        
          this.invoice = datta.invoice;
          this.invoice.forEach(dataa => {
             this.stockAva.push(dataa);
             var ItemCode=dataa.itemCode
             var ItemName=dataa.description
             var ItemIn=dataa.custQuantity
             var ItemOut=0
             var Balance=0
             var obj=Object.assign({ItemCode,ItemName,ItemIn,ItemOut,Balance })
             this.itemout.push(obj)
          });
          console.log( this.itemout ,'invoice ')
        });
      
        const ava = this.stockAva.reduce((accc, objj) => {
        const existItem = accc.find(item => item.itemCode === objj.itemCode);
        if (existItem) {
          existItem.custQuantity-=objj.custQuantity;
          return accc;
        }
        accc.push(objj);
        return accc;
       }, []);
    
        this.finalValue=ava;
        this.finalValue.forEach(data=>{
    
          data.custQuantity=Math.abs(data.custQuantity)
    
           this.stockAvalibility.push(data)
        })
        this.returnservice.getReturn().subscribe(data=>{
         this.returnProducts=data;
          // console.log(this.returnProducts,'returnprod')
 
         this.returnProducts.forEach(dataa => {
          
             this.stockAvalibility.push(dataa)
          });
        //  console.log(this.returnProducts,'returnprod')
         const repro=this.stockAvalibility.reduce((ac, jj) => {
           const existItem = ac.find(item => item.itemCode === jj.itemCode);
           if (existItem) {
             existItem.returnproduct=jj.returnproduct;
 
             return ac;
           }
           ac.push(jj);
           return ac;
          }, []);
          this.retproduct=repro
          this.retproduct.forEach(data=>{
    
           data.returnproduct=Math.abs(data.returnproduct)
     
            this.ret.push(data)
           
         })
       
         this.ret.forEach(dataa => {
          var ItemCode=dataa.itemCode
          var ItemName=dataa.description
          var Balance=dataa.custQuantity
          var ItemIn=0
          var ItemOut=0
          var obj=Object.assign({ItemCode,ItemName,Balance,ItemIn,ItemOut })
          this.itemout.push(obj)
         
       });
       console.log(this.itemout,'itemout')
       const finalstock=this.itemout.reduce((ac, jj) => {
        const existItem = ac.find(item => item.ItemCode === jj.ItemCode);
        if (existItem) {
          
          existItem.ItemOut+=jj.ItemOut
           existItem.ItemIn+=jj.ItemIn
          existItem.Balance+=jj.Balance;

          return ac;
        }
        ac.push(jj);
        return ac;
       }, []);
       this.stockfinal=finalstock
       console.log(this.stockfinal,'finalstock')
       this.stockfinal.forEach(data=>{
    
        data.ItemIn=Math.abs(data.ItemIn)
        data.Balance=Math.abs(data.Balance)

         this.itemin.push(data)
        
      })
       console.log(this.itemin,'last data')



         if (this.isDtInitialized) {
           this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
             dtInstance.destroy();
             this.dtTrigger.next();
           });
         } else {
           this.isDtInitialized = true
           this.dtTrigger.next();
         }
         
        })
       
       
       //  console.log(this.ret,'availability')
       
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
  exportToExcel(event) {
    this.Excel=[]
    event.forEach(dat => {
    var ItemCode =dat.ItemCode
    var ItemName=dat.ItemName
    var ItemIn=dat.ItemIn
    var ItemOut=dat.ItemOut
    var Balance=dat.Balance
    var obj=Object.assign({ItemCode,ItemName,ItemIn,ItemOut,Balance})
    this.Excel.push(obj)
  });
     
    
    this.excelService.exportAsExcelFile( this.Excel, 'persons');
  }
}
