import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home-tab-one',
  templateUrl: 'home-tab1.html'
})
export class HomeTab1Page {

  constructor(
    public navCtrl: NavController
    , public appCtrl: App
  ) {
    console.log("Constructor: Home Tab 1")
  }

  buttonClick() {
    // this.navCtrl.push(AboutPage)
    this.appCtrl.getRootNavs()[0].push(AboutPage)
  }
}
