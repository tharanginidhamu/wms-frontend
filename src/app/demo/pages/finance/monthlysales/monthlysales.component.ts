import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales/sales.service';
import { PurchaseService } from '../../../extra/sample-page/purchase.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";
import { FormBuilder, FormGroup ,FormControl} from "@angular/forms";

@Component({
  selector: 'app-monthlysales',
  templateUrl: './monthlysales.component.html',
  styleUrls: ['./monthlysales.component.scss']
})
export class MonthlysalesComponent implements OnInit {
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
  checklist=[]
  Excel=[]
  cati=[]
  category=[]
  gory=[]
  catigorydivision=[]
  selected:any;
ret=[]
filttr=[]
fdate
tdate
fromdate = new FormControl();
enddate = new FormControl();

  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

  constructor(private billingService: SalesService, private purchaseService: PurchaseService,private excelService:ExcelService) { }
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
      this.cati.push({categor:dat.category})
     });
     this.category=this.cati
     var filter=this.category.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj["categor"]).indexOf(obj["categor"]) === pos;
  });
  this.gory=filter
    });
  });
  }
  setchange(selectedvalue) {
    this.filttr=[]
    this.sss = selectedvalue;
   
    this.invoice = [];
    const emp = [this.sss];
      console.log(this.product,'prodddd');
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
      this.filttr=this.profitData
      // this.dtTrigger.next();
    });
     this.dtTrigger.next();
    console.log(this.profitData,'goods');
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
  
      
            var SupplierName =dat.supplierName
            var InvoiceNo=dat.invoiceNo
            var ItemCode=dat.itemCode
            var InvoiceDate=dat.invDate
            var Quantity=dat.custQuantity
        var Description =dat.description
        var InvoiceAmount=dat.invoiceAmount
        var Returnproduct=dat.returnproduct
        var obj=Object.assign({SupplierName,InvoiceNo,InvoiceDate,ItemCode,Description,Quantity,InvoiceAmount,Returnproduct})
  
          this.Excel.push(obj)
       
      });
      console.log(this.Excel,'if')
        this.excelService.exportAsExcelFile( this.Excel, 'persons');
        } else {
          this.Excel=[]
          this.checklist.forEach(dat => {
            
              var SupplierName =dat.supplierName
              var InvoiceNo=dat.invoiceNo
              var ItemCode=dat.itemCode
              var InvoiceDate=dat.invDate
              var Quantity=dat.custQuantity
          var Description =dat.description
          var InvoiceAmount=dat.invoiceAmount
          var Returnproduct=dat.returnproduct

          var obj=Object.assign({SupplierName,InvoiceNo,InvoiceDate,ItemCode,Description,Quantity,InvoiceAmount,Returnproduct})
  
          this.Excel.push(obj)
       
      })
        console.log(this.Excel,'else')   
           this.excelService.exportAsExcelFile( this.Excel, 'persons');
        }
      
      }



      onOptionsSelected(){


        var fil = this.filttr.filter(t=>t.category===this.selected.categor);
        this.catigorydivision=fil
        
        console.log(this.filttr,'category',fil)   
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
      console.log(this.product,'prodddd');
      var resultProductData = this.product.filter(function(a) {
        return new Date(a.idate) >= startDate && new Date(a.idate) <= endDate
      });
      this.profitData=resultProductData

      this.filttr=[]
      // this.sss = selectedvalue;
     
      this.invoice = [];
      const emp = [12];
        console.log(resultProductData,'prodddd');
      const filteredArray = this.product.filter(function(itm) {
        return emp.indexOf(itm.crntmonth) > -1;
            });
            console.log(filteredArray,'ddd');
      this.pro = resultProductData;
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
        this.filttr=this.profitData
        console.log(this.filttr,'prodddd');
        // this.dtTrigger.next();
      });
       this.dtTrigger.next();
      console.log(this.profitData,'goods');
      }
}