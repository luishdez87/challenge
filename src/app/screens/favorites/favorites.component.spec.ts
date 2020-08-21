import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { StatPipe } from 'src/app/pipes/stat.pipe';
import { TypePipe } from 'src/app/pipes/type.pipe';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesComponent, StatPipe, TypePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

    const result = component.returnType(pokemon);

    expect(result).toBe('fire/flying');
  });
});
