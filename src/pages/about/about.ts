import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutTab1Page } from '../about-tab1/about-tab1';
import { AboutTab2Page } from '../about-tab2/about-tab2';
import { AboutTab3Page } from '../about-tab3/about-tab3';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tab1 = AboutTab1Page
  tab2 = AboutTab2Page
  tab3 = AboutTab3Page

  constructor(
    public navCtrl: NavController
  ) {
    console.log("Constructor: About")
  }

}
