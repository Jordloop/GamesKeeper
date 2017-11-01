import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { SessionService } from '../../services/session/session.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.css']
})
export class SessionSetupComponent implements OnInit {
  session: any;
  sessionKey: string = null;
  players: object[];

  constructor(
    private router: Router,    
    private playerSvc: PlayerService,
    private sessionSvc: SessionService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit() {
    this.getSessionKeyByRoute();
    this.getPlayers();
  }

  getPlayers() {
    this.playerSvc.getPlayers().subscribe(players => {
      if (players)
        this.players = players;
    })
  }

  getSessionKeyByRoute() {
    this.route.params.forEach((param) => {
      if (param)
        this.sessionKey = (param['id']);
    });
  }

  buttonClicked() {
    this.navigateToSessionScoreboard();
  }

  navigateToSessionScoreboard() {
    this.router.navigate(['scorecard', this.sessionKey]);
  }

}
