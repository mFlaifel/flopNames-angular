import { Component } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flop-names';
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
}
