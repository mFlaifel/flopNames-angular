import { GameService } from './../game.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styles: [],
})
export class GameGridComponent implements OnInit {
  constructor(private gameService: GameService) {
    this.currentTeam = 'red';
  }

  @Input() currentTeam;
  @Output() teamWon = new EventEmitter();

  tileClass00 = '';
  tileClass01 = '';
  tileClass02 = '';
  tileClass10 = '';
  tileClass11 = '';
  tileClass12 = '';
  tileClass20 = '';
  tileClass21 = '';
  tileClass22 = '';

  ngOnInit(): void {}

  setTile(x: number, y: number) {
    // @ts-ignore: Unreachable code error
    const className = this.gameService.gridKey[x][y];
    // @ts-ignore: Unreachable code error
    this['tileClass' + x + y] = className;
    this.gameService.countTile(className);
    if (this.gameService.checkForWinner(className, this.currentTeam)) {
      this.teamWon.emit(this.gameService.winner);
    }
  }
}
