import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: 'timetable.page.html',
  styleUrls: ['timetable.page.scss']
})
export class TimetablePage {
   dateNow : Date = new Date();
  
  // console.log(date);
  timeTableData = [
    ["Days","MON","TUE","WED","THU","FRI"],
    ["P1","Eng","Soc","Tam","P.E.T","Mat"],
    ["P2","Soc","Phy","Soc","Che","Che"],
    ["P3","Sci","Eng","Geo","Mat","Sci"],
    ["P4","P.E.T","Sci","Che","Sci","Tam"],
    ["P5","Mat","Sci","Eco","Phy","Geo"],
    ["P6","Bot","Bot","Mat","Eng","Bot"],
    ["P7","Bot","Mat","Eng","Geo","Phy"],
    ["P8","Phy","Tam","Art","Tam","Sci"]
  ]
  constructor() {}
  weekday = this.dateNow.getDay()-2;
  log(){
   console.log(this.weekday)
  }

  // currTime = this.dateNow.getHours();
  

}
