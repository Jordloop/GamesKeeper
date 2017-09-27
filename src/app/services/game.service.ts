import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getGames() {
    this.games$ = this.db.list('gameData/games');
    console.log('games$', this.games$);
    
    return this.games$;  }

  saveGame(gameData) {
    console.log('service', gameData);
    
    let gameToSave = {
      name: gameData.gameName,

    }

    let dbSaveGame = this.db.list('gameData/games').push(gameToSave);

  }

}
