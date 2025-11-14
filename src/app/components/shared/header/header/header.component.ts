import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonFooter } from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle]
})
export class HeaderComponent implements OnInit {
folder: any;

  constructor() { }

  ngOnInit() {
  }

}
