import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { RunService } from '../run/run.service';


@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<any[]>;
  player$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private runSvc: RunService
  ) { }

  getAllPlayers() {
    const players$ = this.db.list('playerData/players');
    return players$;
  }

  savePlayer(playerData) {
    console.log(playerData);
    const playerToSave = {
      name: playerData.name,
      score: 0
    }
    this.getAllPlayers().push(playerToSave);
  }  
  
  getPlayerByKey(playerKey) {
    const player$ = this.db.object(`playerData/players/${playerKey}`);
    return player$;
  }


  navigateToPlayerDetail(playerKey: any) {
    this.router.navigate([`players/${playerKey}`]);
  }

    incrementScore(run, player) {
      const newScore = player.score += 1;
      this.runSvc.updatePlayerInPlayersPerRun(run.$key, player.$key).update({ score: newScore })
      this.runSvc.updatePlayerInRunData(run, player).update({ score: newScore })
    }

    decrementScore(run, player) {
      const newScore = player.score -= 1;
      this.runSvc.updatePlayerInPlayersPerRun(run.$key, player.$key).update({ score: newScore })
      this.runSvc.updatePlayerInRunData(run, player).update({ score: newScore })
    }

}
