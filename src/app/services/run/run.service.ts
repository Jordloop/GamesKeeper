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
    const runs$ = this.db.list('gameData/runs');
    return runs$;
  }
  
  getRunsByGameKey(gameKey: any) {
    return this.db.list(`associationData/runsPerGame/${gameKey}`);
  } 

// G
  saveRun(runData) {
    this.getAllRuns().push(runData);
    this.getRunsByGameKey(runData.game$Key).push(runData);
  }  

  getGameByRunKey(runKey) {
    const run$ = this.db.object(`gameData/runs/${runKey}`);
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
    this.router.navigate([`gameData/runs/${runKey}`]);
  }

}
