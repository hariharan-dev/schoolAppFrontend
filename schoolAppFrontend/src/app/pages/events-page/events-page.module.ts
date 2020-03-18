import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { EventsPageComponent } from './events-page.component';


import {MatExpansionModule} from '@angular/material/expansion';

import {MatFormFieldModule} from '@angular/material/form-field'


@NgModule({
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,MatFormFieldModule,
    MbscModule,MatExpansionModule,
    RouterModule.forChild([{ path: '', component: EventsPageComponent }])
    ],
  declarations: [EventsPageComponent]
  
})
export class EventsPageModule { }
