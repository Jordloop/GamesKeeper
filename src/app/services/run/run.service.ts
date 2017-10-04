import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class RunService {
  currentRunKey$: BehaviorSubject<string> = new BehaviorSubject(null);
  currentRunKey: string;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  getAllRuns() {
    return this.db.list('runData/runs');
  }
  
  createRunsPerGameAssociation() {

  }
  
  createRun(game) {
    let  runToSave = {
      gameKey: game.$key,
      gameName: game.gameName
    } 
    let run = this.getAllRuns().push(runToSave);    
    this.addRunKeyToGame(game.$key, run.key);
    return run;    
  }

  addRunKeyToGame(gameKey, runKey) {
    this.db.object(`gameData/games/${gameKey}/runs/${runKey}`).set(true)

  }

  getPlayesForCurrentRun() {
    return this.db.list(`associationData/playersPerRun/${this.currentRunKey}`);
  }

  getRunByKey(runKey) {
    return this.db.object(`runData/runs/${runKey}`);
  }

  getGameByRunKey(runKey) {
    return this.db.object(`runData/runs/${runKey}`);
  }

  getRunsByPlayerKey(playerKey) {
    const players = this.db.list(`associationData/runsPerPlayer/${playerKey}`);
    return players; 
  }

  getPlayersByRunKey(runKey: any) {
    return this.db.list(`associationData/playersPerRun/${runKey}`);
  }
  updatePlayerInPlayersPerRun(runKey: any,
  playerKey: any) {
    return this.db.object(`associationData/playersPerRun/${runKey}/${playerKey}`);
  }
  updatePlayerInRunData(run, player){
    return this.db.object(`runData/runs/${run.$key}/players/${player.$key}`)
  }
  incrementScore(run, player) {
    const newScore =player.score += 1;
    this.updatePlayerInPlayersPerRun(run.$key, player.$key).update({score: newScore})
    this.updatePlayerInRunData(run, player).update({score: newScore})
  }
  
  addPlayerToRun(runData, playerData) {
    // debugger
    console.log(playerData);
    
    let playerToSave = {
      playerKey: playerData.$key,
      playerName: playerData.name,
      score: 0
    }
    console.log(playerToSave);
    
    this.updatePlayerInRunData(runData.$key, playerData.$key).update(playerToSave)
    this.updatePlayerInPlayersPerRun(runData.$key, playerData.$key).update(playerToSave);
    // this.getRunsByPlayerKey(playerData.Key).push(runData);
  }

  navigateToRunDetail(runKey: any) {
    this.currentRunKey = runKey;
    this.currentRunKey$.next(runKey);
    this.router.navigate([`run/${runKey}`]);
  }

  getMostRecentRunKey() {
    this.getAllRuns();
  }


}
