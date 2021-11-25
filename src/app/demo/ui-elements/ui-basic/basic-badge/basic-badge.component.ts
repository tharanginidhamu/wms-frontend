import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SalesService } from '../../../pages/sales/sales.service';
import { PurchaseService } from '../../../extra/sample-page/purchase.service';
import { ReturnService } from "../../../pages/sales/returnproducts/return.service";
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from "../../../../../assets/xlservice/xlservice";


@Component({
  selector: 'app-basic-badge',
  templateUrl: './basic-badge.component.html',
  styleUrls: ['./basic-badge.component.scss']
})
export class BasicBadgeComponent  {
    selected:any;

  getProduct;
  stockOut;
  final;
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
  returnpo
   stockAvalibility=[];
   checklist=[]
Excel=[]
cati=[]
category=[]
gory=[]
catigorydivision=[]

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective; 

  isDtInitialized:boolean = false
  constructor(private router: Router,
              private stockService: SalesService, private purchaseService: PurchaseService,
              private returnservice:ReturnService,private toster:ToastrService,private excelService:ExcelService)
               { }
  ngOnInit() {
    this.stockService.getInvProduct().subscribe(data => {
     this.stockOut = data;
     console.log(this.stockOut,'stock')

     this.stockOut.forEach(dataa => {
      this.final = dataa.products;
      this.final.forEach(dat => {
        this.stock.push(dat);
      });
     });
    //  console.log(this.stock,'stock')

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
   
   
     });
    this.purchaseService.getPurchaseData().subscribe(data => {
       this.purchase = data;
       this.purchase.forEach(datta => {
         this.invoice = datta.invoice;
         this.invoice.forEach(dataa => {
            this.stockAva.push(dataa);
            this.cati.push({categor:dataa.category})
         });
         this.category=this.cati
         var filter=this.category.filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj["categor"]).indexOf(obj["categor"]) === pos;
      });
      this.gory=filter
         console.log(  this.category,'cati')

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
         console.log(this.returnProducts,'returnprod')

        this.returnProducts.forEach(dataa => {
         
            this.stockAvalibility.push(dataa)
         });
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
        console.log(this.ret,'availability')
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


          var fil = this.ret.filter(t=>t.category===this.selected.categor);
          this.catigorydivision=fil
          
          console.log(this.selected,'category',fil)   
        }


}
