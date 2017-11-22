import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutTab2Page } from './about-tab2';

@NgModule({
  declarations: [
    AboutTab2Page,
  ],
  imports: [
    IonicPageModule.forChild(AboutTab2Page),
  ],
  exports: [
    AboutTab2Page
  ]
})
export class AboutTab2PageModule { }
