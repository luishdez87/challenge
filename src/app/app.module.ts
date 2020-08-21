import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FirstModalComponent } from './components/first-modal/first-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './screens/landing/landing.component';
import { NotYetComponent } from './screens/not-yet/not-yet.component';
import { SearchComponent } from './screens/search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TypePipe } from './pipes/type.pipe';
import { StatPipe } from './pipes/stat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotYetComponent,
    FirstModalComponent,
    SearchComponent,
    PokemonComponent,
    FavoritesComponent,
    ListItemComponent,
    TypePipe,
    StatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
