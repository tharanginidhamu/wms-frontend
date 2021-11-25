import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales/sales.service';
import { PurchaseService } from '../../../extra/sample-page/purchase.service';
import { Subject } from 'rxjs';
import { ExpenseService } from "../../tables/expense/expense.service";
import { DataTableDirective } from 'angular-datatables';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
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
  total = [];
  Excel=[]
Exdata
expro
totexpense
  count
  profit
  daterange
  filtered
  public start: Date = new Date (); 
    public end: Date = new Date ();
  dtElement: DataTableDirective;

  isDtInitialized:boolean = false
  
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private billingService: SalesService,
     private purchaseService: PurchaseService,
    private expenseService : ExpenseService,
    private excelService: ExcelService ) { }

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
  
  getDater(data){
this.daterange=data
  var sli=data.text
  var eff=sli.slice(0,9)
  var efs=sli.slice(11,21)
  let start = eff
  let end = efs
 
var getdat=this.getData
console.log(start,end,getdat,'getdata');
let selectedMembers = getdat.filter((m) => {
return new Date(m.date) >= new Date(start) && new Date(m.date) <= new Date(end)
});

  console.log(selectedMembers ,'data');

// console.log(this.daterange,'date');
    
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
            // 
            this.profitData.push(data)
            //

          }
        
        });
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
     
       this.dtTrigger.next();


         this.count=0
       this.profitData.forEach(dat => {
        this.count=this.count+dat.profit
       });
       this.expenseService.getData().subscribe(dta => {
        this.Exdata = dta;
        // this.Exdata.forEach(dat => {
          const emp = [this.sss];
          const filtered = this.Exdata.filter(function(itm) {
            return emp.indexOf(itm.crmonth) > -1;
                });
          this.expro = filtered;
          // var tot=dat.total
          //  console.log(this.expro,'total');
        //  });
        this.expro.forEach(dat => {
          this.totexpense=dat.total
         });
         this.profit=this.count-this.totexpense
         console.log(this.profit,'goods');
      }); 
       
     
      // console.log(this.profitData,this.count,'goods');
    }

    exportToExcel(event) {
      this.Excel=[]
      event.forEach(dat => {
        var Month=dat.month
        var ItemCode= dat.itemCode
        var Description=dat.description
        var Quantity=dat.custQuantity
        var Total=dat.invoiceTotal
        var Profit=dat.profit
        var obj=Object.assign({Month,ItemCode,Description,Quantity,Total,Profit})
        this.Excel.push(obj)
       });

      console.log(this.Excel,'xl sheet');
       this.excelService.exportAsExcelFile(this.Excel, 'persons');
    }

}
