import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class GameService {
  games$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  saveGame(gameData) {
    this.getAllGames().push(gameData);
  }

  getAllGames() {
    return this.db.list('gameData/games');
  }

  getGameByKey(gameKey) {
    return this.db.object(`gameData/games/${gameKey}`);
  }
     
  saveRun(gameKey, runData) {
    // let runToSave = {
    //   "runData.gameKey": true,

    // }
    this.getRuns().push(runData);
    this.getRunsByGameKey(gameKey).push(runData);
  }

  getRuns() {
    return this.db.list('gameData/runs');
  }
  
  //runsPerGame
  getRunsByGameKey(gameKey) {
    return this.db.list(`associationData/runsPerGame/${gameKey}`)
  }  

}
