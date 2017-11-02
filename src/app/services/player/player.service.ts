import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
// import { RunService } from '../run/run.service';


@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<any[]>;
  player$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    // private runSvc: RunService
  ) { }

  getPlayers() {
    return this.db.list('playerData/players');
  }

  savePlayer(playerData) {
    console.log(playerData);
    const playerToSave = {
      name: playerData.name,
      score: 0,
      totalGames: 0,
      totalWins: 0
    }
    this.getPlayers().push(playerToSave);
  }  
  
  getPlayerByKey(playerKey) {
    return this.db.object(`playerData/players/${playerKey}`);
  }

  navigateToPlayerDetail(playerKey: any) {
    this.router.navigate([`players/${playerKey}`]);
  }

  incrementPlayerScore(player) {
    const newScore = player.score + 1;
    this.db.object(`playerData/players/${player.$key}`).update({score: newScore});
  }

  decrementPlayerScore(player) {
    const newScore = player.score - 1;
    this.db.object(`playerData/players/${player.$key}`).update({score: newScore});
  }

}
