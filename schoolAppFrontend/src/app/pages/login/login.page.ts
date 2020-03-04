import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { 
    let elem = <HTMLElement>document.querySelector("ion-tab-bar");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }

  ngOnInit() {
  }

}
