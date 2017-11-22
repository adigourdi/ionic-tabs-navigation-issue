import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-tab-one',
  templateUrl: 'about-tab1.html'
})
export class AboutTab1Page {

  constructor(
    public navCtrl: NavController
  ) {
    console.log("Constructor: About Tab 1")
  }
}
