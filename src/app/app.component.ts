import { Team } from './models/Team';
import { GameService } from './game.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title, public gameService: GameService) {
    this.titleService.setTitle('flopNames');
  }

  title = 'flop-names';
  winningMessage = '';
  keyVisibility = false;

  toggleKey() {
    this.keyVisibility = !this.keyVisibility;
  }

  handleVisibility() {
    if (!this.keyVisibility) {
      return 'hidden';
    } else {
      return 'visible';
    }
  }

  changeTeam(name: string) {
    // @ts-ignore: Unreachable code error
    this.gameService.currentTeam = this.gameService[name + 'Team'];
  }

  displayWinner(winner: Team) {
    this.winningMessage = winner.displayName + ' won!';
    this.titleService.setTitle('flopNames - ' + winner.displayName + ' won!');
  }
}
