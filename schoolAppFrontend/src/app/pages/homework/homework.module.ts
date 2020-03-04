import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MbscModule } from '@mobiscroll/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeworkPage } from './homework.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MbscModule,
    RouterModule.forChild([{ path: '', component: HomeworkPage }])
    ],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule {}
