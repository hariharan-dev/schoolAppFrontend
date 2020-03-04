import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router) {
    let elem = <HTMLElement>document.querySelector("ion-tab-bar");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }

  goToPage(path) {
    this.router.navigate([path]);
  }

}
