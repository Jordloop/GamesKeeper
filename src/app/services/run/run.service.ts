import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class RunService {
  runs$: FirebaseListObservable<any[]>
  run$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

// G
  getAllRuns() {
    const runs$ = this.db.list('runData/runs');
    return runs$;
  }
  
  createRunsPerGameAssociation() {

  }
  

  createRun(gameKey) {
    let  runToSave = {
      gameKey: gameKey,
    } 
    let run = this.getAllRuns().push(runToSave);    
    this.addRunKeyToGame(gameKey, run.key);
  }

  addRunKeyToGame(gameKey, runKey) {
    this.db.object(`gameData/games/${gameKey}/runs/${runKey}`).set(true)

  }

  getGameByRunKey(runKey) {
    const run$ = this.db.object(`runData/runs/${runKey}`);
    return run$;
  }

  getRunsByPlayerKey(playerKey) {
    return this.db.list(`associationData/runsPerPlayer/${playerKey}`)
  }

  getPlayersByRunKey(runKey: any) {
    return this.db.list(`associationData/playersPerRun/${runKey}`);
  }
  
  addPlayerToRun(runData, playerData) {
    this.getPlayersByRunKey(runData.key).push(playerData);
    this.getRunsByPlayerKey(playerData.Key).push(runData);
  }

  navigateToRunDetail(runKey: any) {
    this.router.navigate([`runData/runs/${runKey}`]);
  }

}
