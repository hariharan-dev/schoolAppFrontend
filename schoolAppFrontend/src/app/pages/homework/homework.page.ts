import { Component, OnInit } from '@angular/core';
import { MbscDatetimeOptions } from '@mobiscroll/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: 'homework.page.html',
  styleUrls: ['homework.page.scss']
})
export class HomeworkPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  dateSettings: MbscDatetimeOptions = {
    onSet: (event, inst) => {
      console.log("Homework page");
      let selectedDate: NavigationExtras = {
        state: {
          date: event.valueText
        }
      };
      this.router.navigate(['/homework-details'], selectedDate);
    }

  }

}
