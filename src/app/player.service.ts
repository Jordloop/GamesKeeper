import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getPlayers() {
    const players = this.db.list('playerData/players');
    console.log(players);
    return players;
    
  }

  savePlayer() {
    let playerToSave = {
      name: "Dinner!",
      score: 0,
      wins: 0
    }

    let dbSavePlayer = this.db.list('playerData/players').push(playerToSave);
  }

}
