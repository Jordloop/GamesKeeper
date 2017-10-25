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
  session;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    this.getSessionKeyByRoute();
    this.getSessionByKey(this.sessionKey);
  }

  getSessionKeyByRoute() {
    this.route.params.forEach((param) => {
      if (param)
        this.sessionKey = (param['id']);
    });
    console.log('onInit, sessionKey:', this.sessionKey);
  }

  getSessionByKey(sessionKey) {
    this.sessionSvc.getSessionByKey(sessionKey).subscribe(session => {
      if (session)
        this.session = session;
      console.log(`onInit, session: ${sessionKey}`, this.session);
    });
  }

}
