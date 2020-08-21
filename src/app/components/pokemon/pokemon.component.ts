import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { pokeballAnimation } from 'src/app/animations/pokeball';
import { ModalData } from 'src/app/models/modalData.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  animations: [pokeballAnimation]
})
export class PokemonComponent {

  @Input() data: ModalData;
  @Input() isSearching: boolean;


  @Output()
  closing = new EventEmitter();

  @Output()
  addToFavorite = new EventEmitter();

  constructor() { }

  retrieveType(pokemon: Pokemon) {
    let str = '';
    for (const type of pokemon.types) {
      str += type.type.name + '/';
    }
    return str.substring(0, str.length - 1);
  }

  close() {
    this.closing.emit(true);
  }

  onAdd() {
    this.addToFavorite.emit(this.data);
  }
}
