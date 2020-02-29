import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular';

import { AttendencePageRoutingModule } from './attendence-routing.module';

import { AttendencePage } from './attendence.page';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendencePageRoutingModule,
    MbscModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [AttendencePage]
})
export class AttendencePageModule {}
