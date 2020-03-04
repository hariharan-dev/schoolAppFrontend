import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homework-details',
  templateUrl: './homework-details.page.html',
  styleUrls: ['./homework-details.page.scss'],
})
export class HomeworkDetailsPage {

  date: any;
  homework: any;
  subjects = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.date = this.router.getCurrentNavigation().extras.state.date;
      }
    });
    this.homework = {'Tamil':'Write 10 thirukural and give explanation for each kural', 'English': 'Write English caps and small letters. Give a word for each letter. Ex: A for Apple', 'Maths':'Give a examples sums for Addition, Subraction, multiply and Divition', 'Science': 'Give science name for few flowers', 'Social Science': 'Mark all states of India in Map'}
    this.subjects = Object.keys(this.homework);
   }

}
