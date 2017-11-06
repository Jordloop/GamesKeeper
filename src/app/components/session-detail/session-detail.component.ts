import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  sessionKey: string = null;
  sessionPlayers: object[] = null;
  session;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    this.getSessionKeyByRoute();
    if(this.sessionKey != null) {
      console.log('sessionKey', this.sessionKey);
      
      this.getSessionByKey(this.sessionKey);
      this.getPlayersPerSession(this.sessionKey);
      // if(this.sessionPlayers != null)
        console.log(this.sessionPlayers);
    }
    
  }

  getSessionKeyByRoute() {
    this.route.params.forEach((param) => {
      if (param)
        this.sessionKey = (param['id']);
    });
  }

  getSessionByKey(sessionKey) {
    this.sessionSvc.getSessionByKey(sessionKey).subscribe(session => {
      if (session)
        this.session = session;
    });
  }

  getPlayersPerSession(sessionKey) {
    this.sessionSvc.playersPerSessionRef(sessionKey).subscribe(players => {
      this.sessionPlayers = players;
      console.log('sessionPlayers',this.sessionPlayers);
        
    })
  }
}
