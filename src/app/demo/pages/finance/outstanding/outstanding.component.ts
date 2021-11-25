import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales/sales.service';
import { PurchaseService } from '../../../extra/sample-page/purchase.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
export class OutstandingComponent implements OnInit {
  getData;
  product = [];
  invoice = [];
  profitData=[];
  final;
  sss;
  Saddress
  Baddress
  Supplier
  contact
  Gnum
  Inum

  mname;
  pro;
  purchaseData;
  getInvoice;
  total = [];
  value=false
monthlysale
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

  constructor(private billingService: SalesService, private purchaseService: PurchaseService) { }

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
      this.getData.forEach(dat => {
        var date=dat.crmonth 

        // console.log(date,'good');
      
       });
      
      
      const emp = [this.sss];
      const filteredArray = this.getData.filter(function(itm) {
        return emp.indexOf(itm.crmonth) > -1;
            });
          var count=0
            var sale=filteredArray.forEach(element => {
              count=count + element.overAllInvoiceTotal
            });
this.monthlysale=count
       this.pro = filteredArray;
       this.dtTrigger.next();
       console.log(this.pro,'good',count);

    
     }
     back(){
       this.value=false
          };

     show(date) {
      this.invoice = [];
      this.value=true
      this.Supplier=date.name
      this.contact=date.contactNumber
      this.Saddress=date.shipAddress
      this.Baddress=date.billAddress
      this.Gnum=date.cost
      this.Inum=date.invoiceNumber
      this.invoice = date.products
        console.log(date,'good');
      
       }

}
