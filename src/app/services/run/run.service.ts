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
  saveRun(runData) {
    this.getAllRuns().push(runData);
    this.getRunsByGameKey(runData.game$Key).push(runData);

  }
  // G
  getAllRuns() {
    const runs$ = this.db.list('gameData/runs');
    return runs$;
  }

  getGameByKey(runKey) {
    const run$ = this.db.object(`gameData/runs/${runKey}`);
    return run$;
  }

  // runsPerGame
  getRunsByGameKey(gameKey: any) {
    return this.db.list(`associationData/runsPerGame/${gameKey}`);
  }  

  // runsPerPlayer
  getRunsByPlayerKey() {

  }
}
