import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mergeMap, flatMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirstModalComponent } from 'src/app/components/first-modal/first-modal.component';
import { Pokemon, LocationResponse } from 'src/app/models/pokemon.model';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  firstPokemon: Pokemon;
  locations: LocationResponse;
  hasSelected: boolean;

  constructor(
    private storage: StorageService,
    private dialog: MatDialog,
    private apiSvc: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storage.fullPokemon.subscribe(pokemon => {
      if (!pokemon) {
        this.getPokemonFromApi();
        return;
      } else {
        this.firstPokemon = pokemon;
        this.apiSvc.getLocations(this.firstPokemon).subscribe((locations: LocationResponse) => {
          this.locations = locations;
          this.hasSelected = true;
        });
        return;
      }

    });
  }

  getPokemonFromApi() {
    this.storage.pokemon.subscribe(pokemonName => {
      this.apiSvc.getPokemon(pokemonName)
      .pipe(
        switchMap((pokemon: Pokemon)  => {
          this.firstPokemon = pokemon;
          this.storage.catchPokemon(this.firstPokemon);
          return this.apiSvc.getLocations(pokemon);
        }),
      ).subscribe((locations: LocationResponse) => {
        this.locations = locations;
        this.openDialog(this.firstPokemon, this.locations);
      });
    });
  }

  openDialog(pokemon, locations) {
    const dialogRef = this.dialog.open(FirstModalComponent, {
      width: '80%',
      data: {pokemon, locations},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((response: boolean) => {
      this.hasSelected = response;
    });
  }

  navigate(path) {
    this.router.navigate([path]);
  }
}
