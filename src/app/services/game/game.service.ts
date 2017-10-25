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



  getGames() {
    return this.db.list('gameData/games');
  }

  saveGame(gameData) {
    const gameToSave = {
      name: gameData.name,
      sessionsCount: gameData.sessionsCount
    }
    console.log('saveGame service', gameToSave);
    this.getGames().push(gameData);
    } 

    getGameByKey(gameKey) {
      return this.db.object(`gameData/games/${gameKey}`);
    }
    
    navigateToSessionSetup(gameName: any) {
      this.router.navigate([gameName, 'setup']);
    }

}
