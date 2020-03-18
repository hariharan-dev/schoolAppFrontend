import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OverlayModule } from "@angular/cdk/overlay";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    FormsModule, MatFormFieldModule, OverlayModule,
    MbscModule, BrowserModule,BrowserAnimationsModule,MatExpansionModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
