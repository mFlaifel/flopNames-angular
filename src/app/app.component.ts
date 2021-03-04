import { Component } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flop-names';
  currentTeam = 'Red';
  teamTextClass = 'redtext';

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
}
