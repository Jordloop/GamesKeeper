import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scorecard-score',
  templateUrl: './scorecard-score.component.html',
  styleUrls: ['./scorecard-score.component.css']
})
export class ScorecardScoreComponent implements OnInit {
  @Input() player;

  constructor() { }

  ngOnInit() {

  }

  incrementScore(player) {
    player.score++;
    console.log('incrementScore', player);

  }

  decrementScore(player) {
    player.score--;
    console.log('decrementScore', player);

  }

  adjustScore(player, event) {
    player.score = parseInt(event.path[0].value);
    console.log('adjustScore', player);

  }

}
