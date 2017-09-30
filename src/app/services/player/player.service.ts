import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<any[]>;
  player$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  getAllPlayers() {
    const players$ = this.db.list('playerData/players');
    return players$;
  }

  savePlayer(playerData) {
    this.getAllPlayers().push(playerData);
  }  
  
  getPlayerByKey(playerKey) {
    const player$ = this.db.object(`playerData/players/${playerKey}`);
    return player$;
  }

  navigateToPlayerDetail(playerKey: any) {
    this.router.navigate([`players/${playerKey}`]);
  }


}
