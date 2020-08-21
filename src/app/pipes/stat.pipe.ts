import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
  name: 'stat'
})
export class StatPipe implements PipeTransform {

  transform(data: Pokemon[], stat: string, value: number): Pokemon[] {
    if (!data || !stat || !value) {
      return data;
    }
    return data.map(d => {
      if (d) {
        if (d.stats.find(s => {
          if (s.stat.name === stat) {
            return s.base_stat >= value;
          }
        })) {
          return d;
        } else {
          return;
        }
      }
    });
  }

}
