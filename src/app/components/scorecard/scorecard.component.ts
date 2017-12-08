import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  availablePlayers;
  players: object[] = [{ name: "", score: 0}];

  constructor(public plrSvc: PlayerService) { }

  ngOnInit() {

  }

  addPlayer() {
    const newPlayer = {name: "New Player", score: 0};
    this.players.push(newPlayer);

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
    player.score = event.path[0].value;
    console.log('adjustScore', player);

  }

}
