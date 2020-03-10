import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any[] = [];
  items;
  user = { username: "Sadasivam", student_name: "Naveen", class: "5th", phone: "9952267549", email: "sadasivam@gmail.com" }
  menu_bar;
  menu_item;
  menu_indicator;
  menu_current_item;
  menu_position;
  routerPage;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    console.log("rouer", router.url)
    this.routerPage = router.url;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [{
        pagename: "Home",
        icon: "home",
        url: "tabs/home"
      },
      {
        pagename: "Homework",
        icon: "book",
        url: "tabs/homework"
      },
      {
        pagename: "Timetable",
        icon: "calendar",
        url: "tabs/timetable"
      }]
    });
  }

  ngOnInit() {
  }

  editProfile() {

    this.items = document.querySelectorAll(".menuItem");

    for (var i = 0, l = 5; i < l; i++) {
      this.items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
      this.items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    }
    
    document.querySelector('.center').classList.toggle('small');

    document.querySelector('.circle').classList.toggle('open');

  }
}
