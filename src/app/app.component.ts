import { Component } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title = 'flop-names';
  currentTeam = 'Red';
  teamTextClass = 'redtext';

  tileClass00: string = '';
  tileClass01: string = '';
  tileClass02: string = '';
  tileClass10: string = '';
  tileClass11: string = '';
  tileClass12: string = '';
  tileClass20: string = '';
  tileClass21: string = '';
  tileClass22: string = '';

  ngOnInit() {}

  keyDisplay = false;

  toggleKey() {
    this.keyDisplay = !this.keyDisplay;
  }

  handleDisplay() {
    if (!this.keyDisplay) {
      return 'visibility:hidden';
    } else {
      return '';
    }
  }

  changeTeam(name: string) {
    this.currentTeam = name;

    if (name === 'Red') {
      this.teamTextClass = 'redtext';
    } else {
      this.teamTextClass = 'bluetext';
    }
  }

  setTile(x: number, y: number) {
    console.log(x, y);
    let xPosition = x.toString();
    let yPosition = y.toString();
    // @ts-ignore: Unreachable code error
    this['tileClass' + xPosition + yPosition] = 'red';
  }
}
