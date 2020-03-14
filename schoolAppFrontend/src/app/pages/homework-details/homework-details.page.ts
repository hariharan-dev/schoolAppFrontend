import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from 'src/app/services/homework.service';

@Component({
  selector: 'app-homework-details',
  templateUrl: './homework-details.page.html',
  styleUrls: ['./homework-details.page.scss'],
})
export class HomeworkDetailsPage implements OnInit {

  date: any;
  homework = {};
  subjects = [];
  params = {}

  constructor(private route: ActivatedRoute, private router: Router, private homeworkService: HomeworkService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.date = this.router.getCurrentNavigation().extras.state.date;
      }
    });
  }

  ngOnInit() {
    this.params = {
      'date': this.date,
      'class': '5',
      'section': 'a'
    }
    this.homeworkService.get(this.homeworkService.getParams(this.params)).subscribe((res) => {
      res.homeWorksData[0].subjects.forEach(subject => {
        this.homework[subject.subjectName] = subject.edition
        this.subjects = Object.keys(this.homework);
      });
    });
  }

}
