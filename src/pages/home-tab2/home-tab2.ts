import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home-tab-two',
  templateUrl: 'home-tab2.html'
})
export class HomeTab2Page {

  constructor(
    public navCtrl: NavController
    , public appCtrl: App
  ) {
    console.log("Constructor: Home Tab 2")
  }

  buttonClick() {
    // this.navCtrl.push(AboutPage)
    this.appCtrl.getRootNavs()[0].push(AboutPage)
  }
}
