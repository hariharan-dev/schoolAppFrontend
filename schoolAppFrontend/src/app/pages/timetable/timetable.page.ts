import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: 'timetable.page.html',
  styleUrls: ['timetable.page.scss']
})
export class TimetablePage {
   date:Date = new Date();
  // console.log(date);
  constructor() {}
 

}
