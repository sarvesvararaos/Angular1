import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from "./players/players.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { PlaywinnerComponent } from "./playwinner/playwinner.component";

//const routes: Routes = [];
//import { PlaywinnerComponent } from "./playwinner/playwinner.component";
const routes: Routes = [
 { path: '', component: PlayersComponent },
 { path: 'play', component: PlaygroundComponent },
 { path: 'winner', component: PlaywinnerComponent }
];

/*const routes: Routes = [
 { path: '', component: PlayersComponent },
 { path: 'play', component: PlaygroundComponent }
];
*/
@NgModule({
  declarations : [],
  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
  exports : [ RouterModule ]

})
export class AppRoutingModule { }
