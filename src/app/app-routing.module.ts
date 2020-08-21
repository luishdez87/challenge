import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrlGuard } from './guards/url.guard';
import { LandingComponent } from './screens/landing/landing.component';
import { NotYetComponent } from './screens/not-yet/not-yet.component';
import { SearchComponent } from './screens/search/search.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent, canActivate: [UrlGuard]},
  { path: 'search', component: SearchComponent, canActivate: [UrlGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [UrlGuard]},
  { path: 'wait4it', component: NotYetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
