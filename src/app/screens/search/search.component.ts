import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon, LocationResponse } from 'src/app/models/pokemon.model';
import { ModalData } from 'src/app/models/modalData.model';
import { StorageService } from 'src/app/services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pokemon: Pokemon;
  location: LocationResponse;
  componentData: ModalData;
  search: FormGroup;
  show: boolean;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private store: StorageService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.search = this.fb.group({
      search: ['']
    });
  }

  triggerSearch() {
    this.api.getPokemon(this.search.value.search)
    .pipe(
      switchMap((pokemon: Pokemon)  => {
        this.pokemon = pokemon;
        return this.api.getLocations(pokemon);
      }),
    ).subscribe((locations: LocationResponse) => {
      this.location = locations;
      this.componentData = {
        pokemon: this.pokemon,
        locations: this.location
      };
      this.show = true;
    }, (error) => {
      this.show = false;
    });
  }

  addToFavorites(event) {
    this.store.setFavoritesPokemons(event.pokemon);
    this.snack.open('Pokemon added to favorites successfully', '', {
      duration: 2000
    });
    setTimeout(() => {
      this.componentData = null;
      this.show = false;
    }, 2000);
  }
}
