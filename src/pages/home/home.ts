import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeTab1Page } from '../home-tab1/home-tab1';
import { HomeTab2Page } from '../home-tab2/home-tab2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = HomeTab1Page
  tab2 = HomeTab2Page

  constructor(public navCtrl: NavController) {
    console.log('Constructor: Home')
  }

}
