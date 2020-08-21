import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(
    private http: HttpClient
  ) { }

  getPokemon(name: string) {
    return this.http.get(this.url + `/${name.toLowerCase()}`);
  }

  getLocations(pokemon: Pokemon) {
    return this.http.get(pokemon.location_area_encounters);
  }
}
