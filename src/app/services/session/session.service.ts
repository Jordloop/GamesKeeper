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

      //Works but is not used
  // getPlayersBySessionKey(sessionKey) {
  //   return this.db.list(`sessionData/sessions/${sessionKey}/players/`)
  //     .map(players => {
  //       return players.map(player => this.db.object(`playerData/players/${player.$key}`));
  //     })
  //     .flatMap(firebaseObjectObservables => {
  //       return Observable.combineLatest(firebaseObjectObservables)
  //     });
  // }

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

// -------------------------------------------------------


  // createRunsPerGameAssociation() {

  // }



  // addRunKeyToGame(gameKey, runKey) {
  //   this.db.object(`gameData/games/${gameKey}/runs/${runKey}`).set(true)

  // }

  // getPlayesForCurrentRun() {
  //   return this.db.list(`associationData/playersPerRun/${this.currentRunKey}`);
  // }


  // getGameByRunKey(runKey) {
  //   return this.db.object(`runData/runs/${runKey}`);
  // }

  // getRunsByPlayerKey(playerKey) {
  //   const players = this.db.list(`associationData/runsPerPlayer/${playerKey}`);
  //   return players;
  // }

  // getPlayersByRunKey(runKey: any) {
  //   return this.db.list(`associationData/playersPerRun/${runKey}`);
  // }
  // updatePlayerInPlayersPerRun(runKey: any,
  //   playerKey: any) {
  //   return this.db.object(`associationData/playersPerRun/${runKey}/${playerKey}`);
  // }
  // updatePlayerInRunData(run, player) {
  //   return this.db.object(`runData/runs/${run.$key}/players/${player.$key}`)
  // }
  // incrementScore(run, player) {
  //   const newScore = player.score += 1;
  //   this.updatePlayerInPlayersPerRun(run.$key, player.$key).update({ score: newScore })
  //   this.updatePlayerInRunData(run, player).update({ score: newScore })
  // }

  // addPlayerToRun(runData, playerData) {
  //   let playerToSave = {
  //     playerKey: playerData.$key,
  //     playerName: playerData.name,
  //     score: 0
  //   }
  //   this.updatePlayerInRunData(runData.$key, playerData.$key).update(playerToSave)
  //   this.updatePlayerInPlayersPerRun(runData.$key, playerData.$key).update(playerToSave);
  //   // this.getRunsByPlayerKey(playerData.Key).push(runData);
  // }

  // navigateToRunDetail(runKey: any) {
  //   this.currentRunKey = runKey;
  //   this.currentRunKey$.next(runKey);
  //   this.router.navigate([`run/${runKey}`]);
  // }

  // getMostRecentRunKey() {
  //   this.getAllRuns();
  // }


}
