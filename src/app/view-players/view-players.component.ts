import { Component } from '@angular/core';
import { PlayerService } from '../player.service'

@Component({
  selector: 'view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent{
  title = "Players";
  players;
  
  constructor(private playerSvc: PlayerService) {}

    getPlayers() {
      console.log("ding");
      
      const players = this.playerSvc.getPlayers();
      console.log(players);
    }

}
