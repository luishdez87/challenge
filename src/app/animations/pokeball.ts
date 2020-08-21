import { trigger, state, style, transition, animate } from '@angular/animations';

export const pokeballAnimation =
  trigger('pokeballAnimation', [
    state('void', style({transform: 'rotate(-180deg)', opacity: 0})),
    transition(':enter, :leave', animate('300ms ease-out'))
  ]);
