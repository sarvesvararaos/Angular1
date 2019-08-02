import { PlayerClass } from './player';
declare var chroma:any;
import * as chroma from 'chroma-js';

export const KEYCODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const PLAYERS : PlayerClass[] =[
  {name:'Kobe Bryant',keyCode:'D',color:chroma.random().hex(),score:0,duration:'0s',dribbles_left:0},
  {name:'LeBron James',keyCode:'K',color:chroma.random().hex(),score:0,duration:'0s',dribbles_left:0},
  {name:'Magic Johnson',keyCode:'Z',color:chroma.random().hex(),score:0,duration:'0s',dribbles_left:0}
];
