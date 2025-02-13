import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime} from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonDatetime]
})
export class Tab2Page {

  constructor() {}

}
