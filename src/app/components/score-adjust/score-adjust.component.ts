import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { SessionService } from '../../services/session/session.service';


@Component({
  selector: 'app-score-adjust',
  templateUrl: './score-adjust.component.html',
  styleUrls: ['./score-adjust.component.css']
})
export class ScoreAdjustComponent implements OnInit {
  @Input() player;
  @Input() sessionKey;
  scoreIsZeroOrGreater: boolean;
  // player: object;

  constructor(
    private playerSvc: PlayerService,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    this.scoreGreaterThanZeroCheck(this.player);
    
    // this.getPlayerByKey();
    
  }

  incrementScore(player) {
    this.sessionSvc.incrementPlayerScore(this.sessionKey, player);
    this.scoreGreaterThanZeroCheck(player);
    console.log(this.scoreIsZeroOrGreater);
    
  }

  decrementScore(player) {
    this.sessionSvc.decrementPlayerScore(this.sessionKey, player);
    this.scoreGreaterThanZeroCheck(player);
    console.log(this.scoreIsZeroOrGreater);
    
  }

  scoreGreaterThanZeroCheck(player) {
    if (player.score <= 0)
      this.scoreIsZeroOrGreater = false;
    else
      this.scoreIsZeroOrGreater = true;
  }
  // getPlayerByKey() {
  // this.playerSvc.getPlayerByKey(this.player.$key).subscribe(player => {
  //   if(player)
  //     this.player = player;
  // });
  // }

}
