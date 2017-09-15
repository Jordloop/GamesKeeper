import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() { }

  getGames() {
    return ["Dominion", "Settlers of Catan", "Carcassonne", "Coup", "Caverna"];
  }

}
