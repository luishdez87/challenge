import { TypePipe } from './type.pipe';
import { Pokemon } from '../models/pokemon.model';

describe('TypePipe', () => {
  it('create an instance', () => {
    const pipe = new TypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a filtered array on values', () => {
    const pipe = new TypePipe();
    const pokemonArray = [
      {types: [{type: {name: 'flying'}}, {type: {name: 'fire'}}]},
      {types: [{type: {name: 'electric'}}]},
    ] as Pokemon[] ;
    const result = pipe.transform(pokemonArray, 'flying').filter(value => {
      if (value) {
        return value;
      }
    });
    expect(result.length).toBe(1);
  });
});
