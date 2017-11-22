import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutTab1Page } from './about-tab1';

@NgModule({
  declarations: [
    AboutTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(AboutTab1Page),
  ],
  exports: [
    AboutTab1Page
  ]
})
export class AboutTab1PageModule { }
