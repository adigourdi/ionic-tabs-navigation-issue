import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutTab3Page } from './about-tab3';

@NgModule({
  declarations: [
    AboutTab3Page,
  ],
  imports: [
    IonicPageModule.forChild(AboutTab3Page),
  ],
  exports: [
    AboutTab3Page
  ]
})
export class AboutTab3PageModule { }
