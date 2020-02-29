import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: 'homework.page.html',
  styleUrls: ['homework.page.scss']
})
export class HomeworkPage {

  // lockSwipeToPrev:boolean = false;

  constructor() {}

//   calendar = {
//     locale: 'en-GB'
// };

// ngAfterViewInit() {
//   var me = this;
//   setTimeout(function() {
//       me.lockSwipes = true;
//   },100);
// }

// markDisabled = (date: Date) => {
//   var current = new Date();
//   return date < current;
// };

// calendar = {
//   dateFormatter: {
//       formatMonthViewDay: function(date:Date) {
//           return date.getDate().toString();
//       },
//       formatMonthViewDayHeader: function(date:Date) {
//           return 'testMDH';
//       },
//       formatMonthViewTitle: function(date:Date) {
//           return 'testMT';
//       },
//       formatWeekViewDayHeader: function(date:Date) {
//           return 'testWDH';
//       },
//       formatWeekViewTitle: function(date:Date) {
//           return 'testWT';
//       },
//       formatWeekViewHourColumn: function(date:Date) {
//           return 'testWH';
//       },
//       formatDayViewHourColumn: function(date:Date) {
//           return 'testDH';
//       },
//       formatDayViewTitle: function(date:Date) {
//           return 'testDT';
//       }
//   }
// };

// onCurrentDateChanged(event:Date) {
//   var today = new Date();
//   today.setHours(0, 0, 0, 0);
//   event.setHours(0, 0, 0, 0);

//   if (this.calendar.mode === 'month') {
//       if (event.getFullYear() < today.getFullYear() || (event.getFullYear() === today.getFullYear() && event.getMonth() <= today.getMonth())) {
//           this.lockSwipeToPrev = true;
//       } else {
//           this.lockSwipeToPrev = false;
//       }
//   }
// }

// onViewTitleChanged = (title: string) => {
//   this.viewTitle = title;
// };

// onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
//   console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
// };

}
