import {Component, DoCheck, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import {DattaConfig} from '../../../../../app-config';
// SDK
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}), 
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class NavRightComponent implements OnInit, DoCheck {
  public visibleUserList: boolean;
  public chatMessage: boolean;
  public friendId: boolean;
  public dattaConfig: any;

 // SDK
 public styleSelectorToggle: boolean; // open configuration menu
 public layoutType: string; // layout type
 public rtlLayout: any; // rtl type
 public menuFixedLayout: any; // menu/navbar fixed flag
 public headerFixedLayout: any; // header fixed flag
 public boxLayout: any; // box layout flag
 public isColoredIcon: any; // menu icon color
 public headerBackgroundColor: string; // header background color
 public navbarBackgroundColor: string; // navbar background color
 public brandBackgroundColor: string; // brand/logo background color
 public navBackgorundImage: any; // navbar background image

 public menuDropdownIcon: string; // navbar background image
 public menuListIcon: string; // navbar background image

 public navActiveColor: string;
 public navTitleColor: string;
 public menuTitleHide: any;

 public headerBackColor: string;

 public DattaConfig: any;
 public isConfig: boolean;
id
ourName
ourlocation
  constructor(config: NgbDropdownConfig, private location: Location) {
    config.placement = 'bottom-right';
    this.visibleUserList = false;
    this.chatMessage = false;
    this.dattaConfig = DattaConfig.config;

    var us = JSON.parse( localStorage.getItem('user'))
    // us.forEach(element => {
    //   this.id=element.branchId
    //   this.ourName=element.branchName
    //   this.ourlocation=element.branchLocation
    // });
  }

  ngOnInit() {
    this.styleSelectorToggle = false;

    this.layoutType =  this.dattaConfig['layout-type'];
    this.setLayout(this.layoutType);

    this.isColoredIcon = this.dattaConfig['nav-icon-color'];
    this.changeIconColor(this.isColoredIcon);

    this.headerBackgroundColor = this.dattaConfig['header-back-color'];
    this.navbarBackgroundColor = this.dattaConfig['nav-back-color'];
    this.brandBackgroundColor = this.dattaConfig['nav-brand-color'];
    this.navBackgorundImage = this.dattaConfig['nav-back-image'];

    this.setHeaderBackground(this.headerBackgroundColor);
    this.setNavbarBackground(this.navbarBackgroundColor);
    this.setBrandBackground(this.brandBackgroundColor);
    this.setBackgroundImage(this.navBackgorundImage);
  

   


    if (this.dattaConfig['pre-layout'] !== '' && this.dattaConfig['pre-layout'] !== null) {
      this.setPreBuildLayout(this.dattaConfig['pre-layout']);
    }
    // this.router.navigate(['/dashboard/default']);
  }

  setThemeLayout() {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }

    switch (current_url) {

      
      case this.location['_baseHref'] + '/layout/light':
        this.dattaConfig['layout'] = 'vertical';
        this.dattaConfig['layout-type'] = 'menu-light';
        break;
      case this.location['_baseHref'] + '/layout/dark':
        this.dattaConfig['layout'] = 'vertical';
        this.dattaConfig['layout-type'] = 'dark';
        this.dattaConfig['nav-back-color'] = 'navbar-dark';
        this.dattaConfig['nav-brand-color'] = 'brand-dark';
        break;

      
      default:
        break;
    }
  }

  setPreBuildLayout(pre_layout) {
    if (pre_layout === 'layout-6') {
      document.querySelector('.pcoded-navbar').classList.add('menupos-static');
      this.headerBackColor = this.dattaConfig['layout-6-background'];
      this.setHeaderBackColor(this.headerBackColor);
    }

    if (pre_layout !== 'layout-6' && pre_layout !== 'layout-8') {
      this.isConfig = false;
      document.querySelector('.pcoded-navbar').classList.add(pre_layout);
    } else {
      document.querySelector('body').classList.add(pre_layout);
    }
  }

  setHeaderBackColor(color) {
    this.headerBackColor = color;
    (document.querySelector('body') as HTMLElement).style.background = color;
  }

  // change main layout
  setLayout(layout) {
    this.isConfig = true;
    this.setNavbarBackground(this.dattaConfig['nav-back-color']);
    this.setBrandBackground(this.dattaConfig['nav-brand-color']);
    document.querySelector('.pcoded-navbar').classList.remove('menu-light');
    document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
    document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
    document.querySelector('body').classList.remove('datta-dark');
    this.setHeaderBackground('header-default');

    this.layoutType = layout;
    if (layout === 'menu-light') {
      this.setNavbarBackground(this.navbarBackgroundColor);
      this.setBrandBackground(this.brandBackgroundColor);
      document.querySelector('.pcoded-navbar').classList.add(layout);
    }
    if (layout === 'dark') {
      document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
      document.querySelector('.pcoded-navbar').classList.add('brand-dark');

      this.setNavbarBackground('navbar-dark');
      this.setBrandBackground('brand-dark');

      if (this.dattaConfig['pre-layout'] !== 'layout-6') {
        this.setHeaderBackground('header-dark');
      }

      document.querySelector('body').classList.add('datta-dark');
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
    this.ngOnInit();
  }

  setColoredIcon(e) {
    const flag = !!(e.target.checked);
    this.changeIconColor(flag);
  }

  changeIconColor(flag) {
    if (flag) {
      document.querySelector('.pcoded-navbar').classList.add('icon-colored');
    } else {
      document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
    }
  }


  

 
 

  
  setHeaderBackground(background) {
    this.headerBackgroundColor = background;
    document.querySelector('.pcoded-header').classList.remove('header-blue');
    document.querySelector('.pcoded-header').classList.remove('header-red');
    document.querySelector('.pcoded-header').classList.remove('header-purple');
    document.querySelector('.pcoded-header').classList.remove('header-lightblue');
    document.querySelector('.pcoded-header').classList.remove('header-dark');
    if (background !== 'header-default') {
      document.querySelector('.pcoded-header').classList.add(background);
    }
  }

  setNavbarBackground(background) {
    this.setBackgroundImage(this.dattaConfig['nav-back-image']);
    this.navbarBackgroundColor = background;
    document.querySelector('.pcoded-navbar').classList.remove('navbar-blue');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-red');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-purple');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-lightblue');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');

    // add default menu brand background color
    document.querySelector('.pcoded-navbar').classList.add('brand-default');
    if (background !== 'navbar-default') {
      document.querySelector('.pcoded-navbar').classList.add(background);
    }
  }

  setBrandBackground(background) {
    this.brandBackgroundColor = background;
    document.querySelector('.pcoded-navbar').classList.remove('brand-default');
    document.querySelector('.pcoded-navbar').classList.remove('brand-blue');
    document.querySelector('.pcoded-navbar').classList.remove('brand-red');
    document.querySelector('.pcoded-navbar').classList.remove('brand-purple');
    document.querySelector('.pcoded-navbar').classList.remove('brand-lightblue');
    document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
    document.querySelector('.pcoded-navbar').classList.add(background);
  }

  setBackgroundImage(image) {
    document.querySelector('.pcoded-navbar').classList.remove('navbar-image-1');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-image-2');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-image-3');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-image-4');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-image-5');
    if (image) {
      this.navBackgorundImage = image;
      document.querySelector('.pcoded-navbar').classList.add(image);
    }
  }

  setMenuDropdownIcon(icon) {
    document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style1');
    document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style2');
    document.querySelector('.pcoded-navbar').classList.remove('drp-icon-style3');
    if (icon !== 'style1') {
      document.querySelector('.pcoded-navbar').classList.add('drp-icon-' + icon);
    }
  }

  setMenuListIcon(icon) {
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style1');
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style2');
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style3');
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style4');
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style5');
    document.querySelector('.pcoded-navbar').classList.remove('menu-item-icon-style6');
    if (icon !== 'style1') {
      document.querySelector('.pcoded-navbar').classList.add('menu-item-icon-' + icon);
    }
  }

  
  



  onChatToggle(friend_id) {
    this.friendId = friend_id;
    this.chatMessage = !this.chatMessage;
  }

  ngDoCheck() {
    if (document.querySelector('body').classList.contains('datta-rtl')) {
      this.dattaConfig['rtl-layout'] = true;
    } else {
      this.dattaConfig['rtl-layout'] = false;
    }
  }
}
