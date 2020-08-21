import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selectedPokemon = new BehaviorSubject<string>('');
  private ownedPokemon = new BehaviorSubject<Pokemon>(null);
  private favoritesArray = new BehaviorSubject([]);
  pokemon = this.selectedPokemon.asObservable();
  favorites = this.favoritesArray.asObservable();
  fullPokemon = this.ownedPokemon.asObservable();

  constructor() { }

  setInitialPokemon(pokemon) {
    this.selectedPokemon.next(pokemon);
  }

  catchPokemon(pokemon) {
    this.ownedPokemon.next(pokemon);
  }

  setFavoritesPokemons(pokemon) {
    const currentValue = this.favoritesArray.value;
    const updatedValue = [...currentValue, pokemon];
    this.favoritesArray.next(updatedValue);
  }
}
