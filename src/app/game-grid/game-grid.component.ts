import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styles: [],
})
export class GameGridComponent implements OnInit {
  constructor() {
    this.currentTeam = 'red';
  }

  @Input() currentTeam;
  @Output() teamWon = new EventEmitter();

  blueTileSelected = 0;
  redTileSelected = 0;

  tileClass00 = '';
  tileClass01 = '';
  tileClass02 = '';
  tileClass10 = '';
  tileClass11 = '';
  tileClass12 = '';
  tileClass20 = '';
  tileClass21 = '';
  tileClass22 = '';

  gridKey = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  ngOnInit(): void {}

  setTile(x: number, y: number) {
    // @ts-ignore: Unreachable code error
    const className = this.gridKey[x][y];
    // @ts-ignore: Unreachable code error
    this['tileClass' + x + y] = className;
    this.countTile(className);
    this.checkForWinner(className);
  }

  countTile(tileCategory: string) {
    if (tileCategory === 'blue') {
      this.blueTileSelected++;
    } else if (tileCategory === 'red') {
      this.redTileSelected++;
    }
  }

  checkForWinner(tileCategory: string) {
    if (this.blueTileSelected === 2) {
      this.teamWon.emit('blue');
    } else if (this.redTileSelected === 2) {
      this.teamWon.emit('red');
    } else if (tileCategory === 'assassin') {
      console.log(this.currentTeam);
      if (this.currentTeam === 'red') {
        this.teamWon.emit('blue');
      } else {
        this.teamWon.emit('red');
      }
    }
  }
}
