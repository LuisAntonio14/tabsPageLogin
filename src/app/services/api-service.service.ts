import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; // ✅ URL base correcta

  constructor(private http: HttpClient) { }

  // Obtener la lista de Pokémon
  public getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=20`); // ✅ Usar URL correcta
  }

  // Obtener un Pokémon por nombre
  public getPokemon(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nombre}`); // ✅ Corrección en la URL
  }
}
