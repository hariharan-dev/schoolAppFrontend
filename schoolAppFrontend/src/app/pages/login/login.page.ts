import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public menu: MenuController) { 
    // let elem = <HTMLElement>document.querySelector("ion-tab-bar");
    // if (elem != null) {
    //   elem.style.display = 'none';
    // }
    this.menu.enable(false, 'custom');
  }

  ngOnInit() {
  }

  loginForm() {
    this.router.navigate(['home']);
  }

}
