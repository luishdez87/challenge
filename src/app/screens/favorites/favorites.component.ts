import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { StorageService } from 'src/app/services/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  type: string;
  stat: string;
  favorites: Observable<Pokemon[]>;
  stats = [
    {name: 'hp'},
    {name: 'attack'},
    {name: 'defense'},
    {name: 'special-attack'},
    {name: 'special-defense'},
    {name: 'speed'},
  ];
  value = 0;
  constructor(
    private store: StorageService
  ) { }

  returnType(pokemon) {
    let str = '';
    for (const type of pokemon.types) {
      str += type.type.name + '/';
    }
    return str.substring(0, str.length - 1);
  }

  ngOnInit(): void {
    this.favorites = this.store.favorites;
  }


}
