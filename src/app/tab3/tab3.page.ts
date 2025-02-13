import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, 
  IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, 
    IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList
  ],
})
export class Tab3Page implements OnInit {
  items: string[] = [];

  constructor() {}

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Nuevo Desempleado ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
