import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('when data reach retrieve must iterate on types array and return a string', () => {
    const pokemon = {
      types: [
        {
          type: {
            name: 'fire'
          },
        },
        {
          type: {
            name: 'flying'
          }
        }
      ]
    } as Pokemon;

    const result = component.retrieveType(pokemon);

    expect(result).toBe('fire/flying');
  });
});
