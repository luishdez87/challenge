import { Component, Input } from '@angular/core';
import { ModalData } from 'src/app/models/modalData.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() data: Pokemon;

  constructor() { }

  retrieveType(pokemon: Pokemon) {
    let str = '';
    for (const type of pokemon.types) {
      str += type.type.name + '/';
    }
    return str.substring(0, str.length - 1);
  }
}
