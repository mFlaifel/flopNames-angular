import { Team } from './models/Team';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  redTeam: Team = { displayName: 'Red' };
  blueTeam: Team = { displayName: 'Blue' };
  currentTeam: Team = this.redTeam;
  blueTileSelected = 0;
  redTileSelected = 0;
  winner: Team = new Team();
  gameOver = false;

  gridKey = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  countTile(tileCategory: string) {
    if (tileCategory === 'blue') {
      this.blueTileSelected++;
    } else if (tileCategory === 'red') {
      this.redTileSelected++;
    }
  }

  checkForWinner(tileCategory: string) {
    if (this.blueTileSelected === 2) {
      this.setWinner(this.blueTeam);
    } else if (this.redTileSelected === 2) {
      this.setWinner(this.redTeam);
    } else if (tileCategory === 'assassin') {
      if (this.currentTeam === this.redTeam) {
        this.setWinner(this.blueTeam);
      } else {
        this.setWinner(this.redTeam);
      }
    }
    return this.gameOver;
  }

  setWinner(winningTeam: Team) {
    this.winner = winningTeam;
    this.gameOver = true;
  }
}
