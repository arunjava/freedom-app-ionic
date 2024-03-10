import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Carts', url: '/folder/inbox', icon: 'cart' }
  ];
  public labels = [];
  constructor() {}
}
