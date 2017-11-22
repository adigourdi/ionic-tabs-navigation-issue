import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { HomeTab1Page } from '../pages/home-tab1/home-tab1';
import { HomeTab2Page } from '../pages/home-tab2/home-tab2';
import { AboutPage } from '../pages/about/about';
import { AboutTab1Page } from '../pages/about-tab1/about-tab1';
import { AboutTab2Page } from '../pages/about-tab2/about-tab2';
import { AboutTab3Page } from '../pages/about-tab3/about-tab3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeTab1Page,
    HomeTab2Page,
    AboutPage,
    AboutTab1Page,
    AboutTab2Page,
    AboutTab3Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeTab1Page,
    HomeTab2Page,
    AboutPage,
    AboutTab1Page,
    AboutTab2Page,
    AboutTab3Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
