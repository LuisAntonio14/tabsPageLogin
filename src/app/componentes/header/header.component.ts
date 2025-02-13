import { Component, OnInit, Input} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo?: string;
  constructor() { }

  ngOnInit() {}

}
