import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(data: Pokemon[], type: string): Pokemon[] {
    if (!data || !type) {
      return data;
    }
    return data.map(d => {
      if (d) {
        if (d.types.find(t => t.type.name.includes(type))) {
          return d;
        }
      }
    });
  }
}
