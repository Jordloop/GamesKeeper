import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service'

@Component({
  selector: 'view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {
  title = "Players";
  players;
  
  constructor(private playerSvc: PlayerService) {}

  ngOnInit() {
    this.players = this.playerSvc.getPlayers()
                                  .subscribe(players => this.players=players);
  }

    savePlayer() {
      this.playerSvc.savePlayer();
    }

    incrementScore(player) {
      player.score += 1;
      console.log(`player: ${player.name} score: ${player.score}`);
    }

    decrementScore(player) {
      player.score -= 1;
      console.log(`player: ${player.name} score: ${player.score}`);
    }


}
