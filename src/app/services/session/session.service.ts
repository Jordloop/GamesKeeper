import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
// import 'rxjs/add/operator/map';
import { PlayerService } from '../../services/player/player.service';

import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class SessionService {

  constructor(
    private playerSvc: PlayerService,
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  saveSession(game) {
    let sessionToSave = {
      gameKey: game.gameKey,
      gameName: game.gameName,
      gameWinner: false
    }
    return this.getSessions().push(sessionToSave).key;
       
  }

  getSessions() {
    return this.db.list('sessionData/sessions');
    
  }

  addPlayerToSession(sessionKey, player) {
    const playerToAdd = {
      name: player.name,
      score: 0
    }
    this.db.object(`sessionData/sessions/${sessionKey}/players/${player.$key}`).set(playerToAdd)

  }

  playersPerSessionRef(sessionKey) {
    
    return this.db.list(`sessionData/sessions/${sessionKey}/players`);

  }
  
  getSessionByKey(sessionKey) {
    return this.db.object(`sessionData/sessions/${sessionKey}`);

  }
  
  incrementPlayerScore(sessionKey, player) {
    const newScore = player.score + 1;
    this.db.object(`sessionData/sessions/${sessionKey}/players/${player.$key}`).update({ score: newScore });

  }
  
  decrementPlayerScore(sessionKey, player) {
    const newScore = player.score - 1;
    this.db.object(`sessionData/sessions/${sessionKey}/players/${player.$key}`).update({ score: newScore });

  }

      //Works but is not used
  // getPlayersBySessionKey(sessionKey) {
  //   return this.db.list(`sessionData/sessions/${sessionKey}/players/`)
  //     .map(players => {
  //       return players.map(player => this.db.object(`playerData/players/${player.$key}`));
  //     })
  //     .flatMap(firebaseObjectObservables => {
  //       return Observable.combineLatest(firebaseObjectObservables)
  //     });
  // 
  // }
}