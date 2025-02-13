import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonInput, IonItem, IonList,IonButton, IonLabel, IonText, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonText, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonInput, IonItem, IonList,IonButton],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
