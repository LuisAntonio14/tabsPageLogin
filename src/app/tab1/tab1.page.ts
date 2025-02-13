import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router para navegación
import { IonContent, IonAlert, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { HeaderComponent } from '../componentes/header/header.component';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonButton, IonAlert, IonCheckbox, HeaderComponent],
})
export class Tab1Page implements OnInit {
  nombre = "Luis";
  alertButtons = ['Acepto Afiliación'];
  pokemones: any;

  constructor(private api: ApiServiceService, private router: Router) {}  // Agregar Router al constructor

  ngOnInit() {
    // Obtener la lista de Pokémon
    this.api.getPokemons().subscribe((vaca: any) => {
      this.pokemones = vaca;
      console.log(this.pokemones);
    });

    // Obtener un Pokémon específico (corrigiendo el error)
    this.api.getPokemon('charizard').subscribe((res: any) => {  // ✅ Se pasa el argumento
      console.log(res);
    });
  }

  // Función para redirigir al login
  irALogin() {
    this.router.navigate(['/login']);  // Redirigir a la página de login
  }
}
