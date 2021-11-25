import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: '',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'ui-element',
    title: 'SERVICES',
    type: 'group',
    icon: 'icon-ui',
    children: [
       {
        id: 'security',
        title: 'Security',
        type: 'item',
        url: '/security',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item',
      },
      {
        id: 'supplier',
        title: 'Supplier',
        type: 'item',
        url: '/oursupplier/suppliersdetail',
        icon: 'feather icon-bar-chart-2',
        classes: 'nav-item',
      },
      {
        id: 'suppliers',
        title: 'Customer',
        type: 'item',
        url: '/supplier/suppliers',
        icon: 'feather icon-user-minus',
        classes: 'nav-item',
      },
     
      {
        id: 'product',
        title: 'Product',
        type: 'item',
        url: '/products/product',
        icon: 'feather icon-bar-chart-2',
        classes: 'nav-item',
      },
      // {
      //   id: 'purchase',
      //   title: 'Purchase',
      //   type: 'item',
      //   url: '/receiving',
      //   icon: 'feather icon-shopping-cart',
      //   classes: 'nav-item',
      // }
      {
        id: 'sample-page',
        title: 'Receiving',
        type: 'collapse',
        url: '/receiving',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item',
        children: [
          {
            id: 'receiptorder',
            title: 'Receipt-Order',
            type: 'item',
            url: '/receiving/receiptorder',
           
          },
          {
            id: 'reciving-rf',
            title: 'Receiving-RF',
            type: 'item',
            url: '/receiving/receivingrf'
          },
          {
            id: 'reciving-pc',
            title: 'Receiving-PC',
            type: 'item',
            url: '/receiving/receivingpc'
          }
         
        ]
      },
    
      {
        id: 'sales',
        title: 'Sales',
        type: 'collapse',
        url: '/saless',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item',
        children: [
          {
            id: 'billing',
            title: 'POS',
            type: 'item',
            url: '/saless/billing'
          },
          {
            id: 'viewinvoice',
            title: 'View Invoice',
            type: 'item',
            url: '/saless/viewinvoice'
          },
          {
            id: 'returnproducts',
            title: 'Return Products',
            type: 'item',
            url: '/saless/return'
          }
         
        ]
      },
      { 
        id: 'tables',
        title: 'Stock Maintenance',
        type: 'collapse',
        url: '/stockmaintenance',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item',
        children: [                                                                                                                                                                                                          
          {
            id: 'inwards',
            title: 'Stock Inward',
            type: 'item',
            url: '/stockmaintenance/inwards' 
          },
          {
            id: 'stock',
            title: 'Stock Availability',
            type: 'item',
            url: '/stockmaintenance/stock'
          }, 
          {
            id: 'outwards',
            title: 'Stock Outward',
            type: 'item',
            url: '/stockmaintenance/outwards'
          }
        ]
      },
      {
        id: 'storage',
        title: 'Storage',
        type: 'collapse',
        url: '/storage',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item',
        children: [
          {
            id: 'storageview',
            title: 'Storage-View',
            type: 'item',
            url: '/storage/storageview',
           
          },
          {
            id: 'division',
            title: 'Division',
            type: 'item',
            url: '/storage/division'
          },
          {
            id: 'createdivison',
            title: 'Create-Divison',
            type: 'item',
            url: '/storage/createdivison'
          }
         
        ]
      },
      {
        id: 'cashin',
        title: 'Cash-In',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2', 
        classes: 'nav-item',
        children: [
         
         
          {
            id: 'cashin-account',
            title: 'Cash-In Account',
            type: 'item',
            url: '/cashin/cashin-bank',
          },
          {
            id: 'cashin-check',
            title: 'Cash-In Cheque',
            type: 'item',
            url: '/cashin/cashin-cheque',
          },
          {
            id: 'cashin-hand',
            title: 'Cash-In Hand',
            type: 'item',
            url: '/cashin/cashin-hand',
          },
          {
            id: 'loanaccount',
            title: 'Loan-Accounts',
            type: 'item',
            url: '/cashin/loan',
          }
         
        ]
      },
      {
        id: 'finance',
        title: 'Finance',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2', 
        classes: 'nav-item',
        children: [
         
         
          {
            id: 'customerhistory',
            title: 'Customer Finance Track History',
            type: 'item',
            url: '/finance/customerhistory',
          },
          {
            id: 'monthlysales',
            title: 'Product-Wise Sales',
            type: 'item',
            url: '/finance/monthlysales',
          },
          {
            id: 'outstanding',
            title: 'Monthly-Wise Sales',
            type: 'item',
            url: '/finance/outstanding',
          },
          {
            id: 'purchase',
            title: 'Profit',
            type: 'item',
            url: '/finance/purchase'
          },
          {
            id: 'sales',
            title: 'GST-Portal',
            type: 'item',
            url: '/finance/sales'
          }
        ]
      },
      {
        id: 'tables',
        title: 'Expense',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2', 
        classes: 'nav-item',
        children: [
          {
            id: 'expense',
            title: 'Expensive',
            type: 'item',
            url: '/tables/expensive'
          },
        ]
      },
      {
        id: 'notes',
        title: 'Notes',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2', 
        classes: 'nav-item',
        children: [
          {
            id: 'note-file',
            title: 'Note',
            type: 'item',
            url: '/notes/note'
          }
        ]
      },
      {
        id: 'files',
        title: 'Files',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2', 
        classes: 'nav-item',
        children: [
          {
            id: 'file-upload',
            title: 'File-Upload',
            type: 'item',
            url: '/files/file-upload'
          }
        ]
      },
      {
        id: 'report',
        title: 'REPORTS',
        type: 'group',
        icon: 'feather icon-server',
        classes: 'nav-item',
       
        children: [
          {
              id: 'transaction',
              title: 'Transaction',
              type: 'collapse',
              url: '/transaction',
              icon: 'feather icon-shopping-cart',
              classes: 'nav-item',
              children: [
                {
                  id: 'salesreport',
                  title: 'Sales-Report',
                  type: 'item',
                  url: '/report/transaction/sales-report'
                },
                {
                  id: 'purchasereport',
                  title: 'Purchase-Report',
                  type: 'item',
                  url: '/report/transaction/purchase-report'
                },
                {
                  id: 'day-book',
                  title: 'Customer Transaction',
                  type: 'item',
                  url: '/report/transaction/customertransaction'
                },
                {
                  id: 'all-transaction',
                  title: 'All-Transactions',
                  type: 'item',
                  url: '/report/transaction/all-transactions'
                },
                {
                  id: 'profit-loss',
                  title: 'Profit/Loss',
                  type: 'item',
                  url: '/report/transaction/profit-loss'
                },
                {
                  id: 'cashflow',
                  title: 'Cash-Flow',
                  type: 'item',
                  url: '/report/transaction/cash-flow'
                },
                {
                  id: 'balance-sheet',
                  title: 'Balance-Sheet',
                  type: 'item',
                  url: '/report/transaction/balance-sheet'
                }
              ]
          },
          {
            id: 'party',
            title: 'Party',
            type: 'collapse',
            url: '/party',
            icon: 'feather icon-shopping-cart',
            classes: 'nav-item',
            children: [
              {
                id: 'allparty-report',
                title: 'All party Report',
                type: 'item',
                url: '/report/party/all-party-report'
              },
              {
                id: 'party-reportby-item',
                title: 'Party Report by-Item',
                type: 'item',
                url: '/report/party/party-report-by-item'
              },
              {
                id: 'party-statement',
                title: 'Party Statement',
                type: 'item',
                url: '/report/party/party-statement'
              }
            ]
          },
          {
            id: 'gst',
            title: 'GST',
            type: 'collapse',
            url: '/gstr',
            icon: 'feather icon-shopping-cart',
            classes: 'nav-item',
            children: [
              {
                id: 'gstr3b',
                title: 'GSTR-3B',
                type: 'item',
                url: '/report/gstr/gstr-3b'
              }
             
            ]
          },
          {
            id: 'item-stock',
            title: 'Item/Stock',
            type: 'collapse',
            url: '/item-stock',
            icon: 'feather icon-shopping-cart',
            classes: 'nav-item',
            children: [
              {
                id: 'item-reportby-party',
                title: 'Item Report-By Party',
                type: 'item',
                url: '/report/item-stock/item-reportby-party'
              },
              {
                id: 'item-summary',
                title: 'Item-Summary',
                type: 'item',
                url: '/report/item-stock/item-summary'
              },
              {
                id: 'item-wise-profit',
                title: 'Item Wise Profit',
                type: 'item',
                url: '/report/item-stock/item-wise-profit'
              },
              {
                id: 'itemdetail-report',
                title: 'Item Detail Report',
                type: 'item',
                url: '/report/item-stock/itemdetail'
              },
              {
                id: 'lowstock-report',
                title: 'Low-Stock Report',
                type: 'item',
                url: '/report/item-stock/lowstock'
              }
             
            ]
          },
          {
            id: 'business',
            title: 'Business-Status',
            type: 'collapse',
            url: '/business-status',
            icon: 'feather icon-shopping-cart',
            classes: 'nav-item',
            children: [
              {
                id: 'bank-statement',
                title: 'Bank-Statement',
                type: 'item',
                url: '/report/business-status/bank-statement'
              },
              {
                id: 'discount',
                title: 'Discount',
                type: 'item',
                url: '/report/business-status/discount'
              },
              {
                id: 'tax',
                title: 'Tax',
                type: 'item',
                url: '/report/business-status/tax'
              }
            ]
          }

        ]
      }
      
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
} 
