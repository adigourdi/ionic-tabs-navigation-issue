import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about-tab-three',
  templateUrl: 'about-tab3.html'
})
export class AboutTab3Page {

  constructor(
    public navCtrl: NavController
  ) {
    console.log("Constructor: About Tab 3")
  }
}
