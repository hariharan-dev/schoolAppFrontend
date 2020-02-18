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
  pages:any[]=[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [{
        pagename: "Home",
        icon: "home",
        url: "tabs/tab1"
      },
      {
        pagename: "Homework",
        icon: "book",
        url: "tabs/tab2"
      },
      {
        pagename: "Timetable",
        icon: "calendar",
        url: "tabs/tab3"
      }]
    });
  }

  goTo(page) {
    this.router.navigate([page.url]);
  }
}
