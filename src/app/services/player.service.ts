import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getPlayers() {
    this.players$ = this.db.list('playerData/players');
    return this.players$;
    
  }

  savePlayer(playerData) {
    console.log('service', playerData.player);
    let playerToSave = {
      name: playerData.playerName,
      score: 0,
      place: 0,
      totalWins: 0
    }

    let dbSavePlayer = this.db.list('playerData/players').push(playerToSave);
  }

}
