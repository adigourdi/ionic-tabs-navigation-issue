import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomeTab2Page } from './home-tab2';

@NgModule({
  declarations: [
    HomeTab2Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab2Page),
  ],
  exports: [
    HomeTab2Page
  ]
})
export class HomeTab2PageModule { }
