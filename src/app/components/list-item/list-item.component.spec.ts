import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
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
