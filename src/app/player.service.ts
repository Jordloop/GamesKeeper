import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return ["Jordan", "Katie", "Larry", "Laura", "Jamison", "Jen", "Lindsey", "Spencer"];
  }

}
