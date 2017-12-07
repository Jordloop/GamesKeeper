import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  availablePlayers: object[] = null;
  players: object[] = [{ name: "", score: 0}];

  constructor(public plrSvc: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.plrSvc.getPlayers().subscribe(players => {
      if(players) {
        this.availablePlayers = players;
        console.log(this.availablePlayers);
        
      }
    })
  }

  addPlayer() {
    const newPlayer = {name: "", score: 0};
    this.players.push(newPlayer);
  }

}
