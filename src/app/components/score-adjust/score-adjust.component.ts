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
  // player: object;

  constructor(
    private playerSvc: PlayerService,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    console.log(this.player);
    
    // this.getPlayerByKey();
    
  }

  incrementScore(player) {
    console.log(player);
    this.sessionSvc.incrementPlayerScore(this.sessionKey, player);
  }

  decrementScore(player) {
    console.log(player);
    this.sessionSvc.decrementPlayerScore(this.sessionKey, player);
  }

  // getPlayerByKey() {
  // this.playerSvc.getPlayerByKey(this.player.$key).subscribe(player => {
  //   if(player)
  //     this.player = player;
  // });
  // }

}
