import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent {

  @Input() match!: any;

  constructor() {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
