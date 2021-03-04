import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  blueTileSelected = 0;
  redTileSelected = 0;
  winner: string = '';

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

  checkForWinner(tileCategory: string, currentTeam: string) {
    if (this.blueTileSelected === 2) {
      this.winner = 'blue';
    } else if (this.redTileSelected === 2) {
      this.winner = 'red';
    } else if (tileCategory === 'assassin') {
      if (currentTeam === 'red') {
        this.winner = 'blue';
      } else {
        this.winner = 'red';
      }
    }
    if (this.winner !== '') {
      return true;
    } else {
      return false;
    }
  }
}
