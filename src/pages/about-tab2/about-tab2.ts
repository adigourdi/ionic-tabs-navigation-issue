import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about-tab-two',
  templateUrl: 'about-tab2.html'
})
export class AboutTab2Page {

  constructor(
    public navCtrl: NavController
  ) {
    console.log("Constructor: About Tab 2")
  }
}
