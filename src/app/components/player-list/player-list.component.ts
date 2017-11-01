import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { SessionService } from '../../services/session/session.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  @Input() sessionKey;
  @Input() players: object[];
  player;
  constructor(
    private playerSvc: PlayerService,
    private sessionSvc: SessionService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit() {

  }

  playerClicked(player) {
    this.players.splice(this.players.indexOf(player), 1)
    this.addPlayerToSession(this.sessionKey, player);
  }

  addPlayerToSession(sessionKey, player) {
    this.sessionSvc.addPlayerToSession(sessionKey, player)
  }

}
 