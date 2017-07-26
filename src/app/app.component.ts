import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: '/assets/img/c1.png' },
      { name: '/assets/img/c2.png' },
      { name: '/assets/img/c3.png' },
      { name: '/assets/img/c4.png' },
      { name: '/assets/img/c10.png' },
      { name: '/assets/img/c6.png' }
    ];
  }
}
