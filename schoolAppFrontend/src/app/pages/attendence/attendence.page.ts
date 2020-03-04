import { Component, OnInit } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';
import { MbscDatetimeOptions } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};

const now = new Date();

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.page.html',
  styleUrls: ['./attendence.page.scss'],
})
export class AttendencePage implements OnInit {

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }


  colorDay: Date;

  holidays = [];

  working_days = 0;
  no_of_leaves = 0;
  percentage = 0;

  govt_holidays = {
    '01/01/2020': "New Year's Day",
    '01/15/2020': 'Pongal',
    '01/16/2020': 'Thiruvalluvar Day',
    '01/17/2020': 'Uzhavar Thirunal',
    '01/26/2020': 'Republic Day',
    '04/10/2020': 'Good Friday',
    '04/14/2020': 'Tamil New Year',
    '05/01/2020': 'May Day',
    '08/01/2020': 'Bakrid / Eid al Adha',
    '08/15/2020': 'Independence Day',
    '08/22/2020': 'Ganesh Chaturthi',
    '08/30/2020': 'Muharram',
    '10/02/2020': 'Gandhi Jayanti',
    '10/25/2020': 'Ayutha Poojai',
    '10/26/2020': 'Vijaya Dashami',
    '10/30/2020': 'Eid e Milad',
    '11/14/2020': 'Deepavali',
    '12/25/2020': '	Christmas Day'
  }

  leaves = {
    "01/24/2020": 'Feeling not well leave',
    "01/28/2020": 'Feeling not well leave',
    "02/24/2020": 'Feeling not well leave',
    "03/24/2020": 'Feeling not well leave',
    "04/24/2020": 'Feeling not well leave',
    "05/24/2020": 'Feeling not well leave',
    "06/24/2020": 'Feeling not well leave',
    "07/24/2020": 'Feeling not well leave',
    "08/24/2020": 'Feeling not well leave',
    "09/24/2020": 'Feeling not well leave',
    "10/24/2020": 'Feeling not well leave',
    "11/24/2020": 'Feeling not well leave',
    "12/24/2020": 'Feeling not well leave',
    "01/23/2020": 'Feeling not well leave',
    "01/29/2020": 'Feeling not well leave'
  }

  ngOnInit() {
    let govtHolidayDate = Object.keys(this.govt_holidays);
    let leaveDate = Object.keys(this.leaves)
    this.no_of_leaves = leaveDate.length;

    govtHolidayDate.forEach((day) => {
      this.holidays.push({ d: day, background: 'green' });

    });

    leaveDate.forEach((day) => {
      this.holidays.push({ d: day, background: 'red' })
    });

    for (var d = new Date(2020, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {

      if (d.getDay() !== 6 && d.getDay() !== 0) {
        this.working_days++;
      }
    }

    govtHolidayDate.forEach((date) => {
      let tmp = date.split('/');
      let leaveDate = new Date(+tmp[2], +tmp[0] - 1, +tmp[1]);

      if (leaveDate <= now && leaveDate.getDay() !== 6 && leaveDate.getDay() !== 0) {
        this.working_days--;
        console.log("Days", leaveDate, this.working_days);
      }
    });

    this.percentage = Math.round(((this.working_days - this.no_of_leaves) / this.working_days) * 100)


    console.log("no of working days:", this.working_days);
  }

  dateSettings: MbscDatetimeOptions = {
    onSet: (event, inst) => {
      if (event.valueText in this.govt_holidays) {
        this.presentAlert('Holiday', event.valueText, this.govt_holidays[event.valueText], 'holiday');
      }
      else if (event.valueText in this.leaves) {
        this.presentAlert('Leave', event.valueText, this.leaves[event.valueText], 'leave');
      }
      else {
        this.presentAlert('Working Day', event.valueText, 'a working day', 'working-day');

      }
    }
  }

  async presentAlert(title, date, reason, style) {
    const alert = await this.alertCtrl.create({
      message: date + " is " + reason,
      cssClass: style,
      subHeader: title,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
