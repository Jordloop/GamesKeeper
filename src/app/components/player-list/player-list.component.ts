import { Component, OnInit } from '@angular/core';
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
  players: object[];
  player;
  sessionKey;
  constructor(
    private playerSvc: PlayerService,
    private sessionSvc: SessionService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit() {
    this.getSessionKeyByRoute();
    this.getPlayers();
  }

  getSessionKeyByRoute() {
    this.route.params.forEach((param) => {
      if (param)
        this.sessionKey = (param['id']);
    });
    console.log('onInit, sessionKey:', this.sessionKey);
  }

  getPlayers() {
    this.playerSvc.getPlayers().subscribe(players => {
      if(players)
        this.players = players;
    })
  }

  playerClicked(player) {
    console.log('player', player);
    this.addPlayerToSession(this.sessionKey, player);
    
  }

  addPlayerToSession(sessionKey, player) {
    this.sessionSvc.addPlayerToSession(sessionKey, player)
  }

}
 