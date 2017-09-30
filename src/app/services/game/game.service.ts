import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class GameService {
  games$: FirebaseListObservable<any[]>;
  game$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

// G
  getAllGames() {
    const games$ = this.db.list('gameData/games');
    return games$;
  }

// G  
  saveGame(gameData) {
    this.getAllGames().push(gameData);
  } 

  getGameByKey(gameKey) {
    const game$ = this.db.object(`gameData/games/${gameKey}`);
    return game$;
  }

  navigateToGameDetail(gameKey: any) {
    this.router.navigate([`games/${gameKey}`]);
  }
  
}
