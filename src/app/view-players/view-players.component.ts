import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../services/player.service'
import { GameService } from '../services/game.service';

@Component({
  selector: 'view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {
  title = "Players";
  @Input() players;
  viewPlayerForm = false;

  constructor(
    private playerSvc: PlayerService,
    private gameSvc: GameService
  ) {}

  ngOnInit() {
    this.playerSvc.getPlayers().subscribe(players => {
      this.players = players;
      console.log(players);
      
    });
  }

  playerFormToggle() {
    this.viewPlayerForm ? this.viewPlayerForm = false : this.viewPlayerForm = true;
  }

  playerClicked(player) {
    console.log(player.$key);
    this.gameSvc.addPlayerToGame(player.$key);
    
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
