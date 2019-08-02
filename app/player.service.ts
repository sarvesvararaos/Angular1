import { Injectable,HostListener } from '@angular/core';
import { PlayerClass } from './player';
import { PLAYERS,KEYCODES } from './player-stock';

//private keyCodes : string = KEYCODES;

import { Router } from '@angular/router';
declare var chroma:any;
import * as chroma from 'chroma-js';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private maxScore : number = 100;
private keyCodes : string = KEYCODES;
//private players : PlayerClass[] = PLAYERS;
private players : PlayerClass[];
getPlayers () : PlayerClass[] {
  // If its defined in localStorage
  if(typeof localStorage !== 'undefined'
  && typeof localStorage.players !=='undefined'
  && localStorage.players !=='') {
    this.players = JSON.parse(localStorage.players);
  }
  // If its not defined in localStorage, then take the stock players
  else
  {
   this.players = PLAYERS ;
  }
  return this.players;
}
addPlayer(name: string): void {
  /** Random KeyCode **/
// Clean Key Codes
this.cleanKeyCodes();
// Generate random number capped to length of key codes available
var randomNum = Math.floor(Math.random()*100) % (this.keyCodes.length);
// Assign the char at random number position
var newKeyCode = this.keyCodes.charAt(randomNum);
//private maxScore : number = 100;
// Exit without creating a player, if unique keycode not available.
if(newKeyCode  === '' ) return;
var newPlayer=
{name:name,keyCode:newKeyCode,color:chroma.random().hex(),score:0,duration:'0s',dribbles_left:0
};
  this.players.push(newPlayer);
// If localStorage is available in this browser
  //Store the players after stringifying  in localStorage

  if(typeof localStorage !== 'undefined')
  {
      localStorage.setItem('players',JSON.stringify(this.players));
  }
  }
  cleanKeyCodes(): void{
   var t =this;
   t.players.forEach(function(element){
    t.keyCodes = t.keyCodes.replace(element.keyCode,'');
   });
  }
  // Score player whenever he dribbles
  scorePlayers(event):void{

    var t = this;
   var key = String.fromCharCode(event.keyCode);
   //Key codes for A = 65  and Z = 90
   if(event.keyCode>64 && event.keyCode<91)
   {
     //Find the player for pressed keyCode
     (this.players).forEach(function(player)
     {
       if(player.keyCode == key)
       {
            player.score +=10;
            player.dribbles_left +=1;
            if(player.score> t.maxScore)
             {
               //
             }
       }
       if(player.score> t.maxScore)
       {
         t.router.navigate(['/winner',{player:JSON.stringify(player)}]);
        }

          });
        }
     }
//Increase / decrease the speed of dribble based on dribbles_left per second
dribbling():void{
 (this.players).forEach(function(player)
 {
  // Duration of dribble if dribbles_left is greater than 0
  player.duration = (player.dribbles_left>0?1/player.dribbles_left:0)+'s';
  player.dribbles_left = 0;
 });
 var t = this;
 // Call this function again after 1 second
 setTimeout(function(){ t.dribbling();},1000)
 if(typeof this.players === 'undefined')
 {
   this.players =  this.getPlayers();
 }
}
constructor(private router : Router) {}
}

  //constructor() { }

//private keyCodes : string = KEYCODES;



//getPlayers() : PlayerClass[] {

// If its defined in localStorage
