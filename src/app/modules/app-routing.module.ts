import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSearchComponent } from '../components/game-search/game-search.component';
import { UserSelectionsComponent } from '../components/user-selections/user-selections.component';
import { GameDetailsComponent } from '../components/game-details/game-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' }, // "When the application first loads to localhost:4200 that it automatically redirects to localhost:4200/search. And this redirect only happens if the exact url is localhost:4200 because of the pathMatch: 'full' property".
  { path: 'search', component: GameSearchComponent },
  { path: 'game-details', component: GameDetailsComponent },
  { path: 'owned', component: UserSelectionsComponent },
  { path: 'wishlist', component: UserSelectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
