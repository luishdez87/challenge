import { StatPipe } from './stat.pipe';
import { Pokemon } from '../models/pokemon.model';

describe('StatPipe', () => {
  it('create an instance', () => {
    const pipe = new StatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a filtered array', () => {

    const pipe = new StatPipe();

    const pokemonArray = [
      {stats: [{stat: {name: 'hp'}, base_stat: 10}, {stat: {name: 'speed'}, base_stat: 10}]},
      {stats: [{stat: {name: 'hp'}, base_stat: 20}, {stat: {name: 'speed'}, base_stat: 20}]},
    ] as Pokemon[] ;

    const result = pipe.transform(pokemonArray, 'hp', 15).filter(value => {
      if (value) { return value; }
    });
    expect(result.length).toBe(1);
  });
});
