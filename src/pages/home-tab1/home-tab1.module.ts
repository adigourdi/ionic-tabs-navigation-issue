import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomeTab1Page } from './home-tab1';

@NgModule({
  declarations: [
    HomeTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab1Page),
  ],
  exports: [
    HomeTab1Page
  ]
})
export class HomeTab1PageModule { }
