import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';


@Component({
  selector: 'app-score-adjust',
  templateUrl: './score-adjust.component.html',
  styleUrls: ['./score-adjust.component.css']
})
export class ScoreAdjustComponent implements OnInit {
  @Input() playerKey: object;
  player: object;

  constructor(
    private playerSvc: PlayerService
  ) { }

  ngOnInit() {
    this.getPlayerByKey();
    console.log('player',this.playerKey);
    
  }

  incrementScore(player) {
    this.playerSvc.incrementPlayerScore(player);
  }

  decrementScore(player) {
    this.playerSvc.decrementPlayerScore(player);
  }

  getPlayerByKey() {
  this.playerSvc.getPlayerByKey(this.playerKey).subscribe(player => {
    if(player)
      this.player = player;
  });
  }
  
}
