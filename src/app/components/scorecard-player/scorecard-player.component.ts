import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-scorecard-player',
  templateUrl: './scorecard-player.component.html',
  styleUrls: ['./scorecard-player.component.css']
})
export class ScorecardPlayerComponent implements OnInit {
  @Input() player;
  availablePlayers;

  constructor(public plrSvc: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.plrSvc.getPlayers().subscribe(players => {
      if(players) {
        this.availablePlayers = players;
        console.log('getPlayers', this.availablePlayers);  
      }
    })
  }

  setPlayerName(player, value) {
    player.name = value;
    console.log('setPlayerName', player);
    
  }

}
