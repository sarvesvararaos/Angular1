import { Component, OnInit, Input } from '@angular/core';
import {PlayerClass} from '../player';

import { PlayerService } from '../player.service';
//import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
//private player : string = 'Kobe Bryant';

//private players : PlayerClass[] = PLAYERS;


//export const KEYCODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
@Input('firstScreen') firstScreen : any = true;
  constructor(private playerservice:PlayerService) {
   }
  
  ngOnInit() {
  this.playerservice.getPlayers();
  }

}
