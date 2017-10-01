import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player/player.service'

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  constructor(private playerSvc: PlayerService) { }
  
  savePlayer(playerData) {
    this.playerSvc.savePlayer(playerData.value);
    console.log(playerData.value);
  }

  ngOnInit() {
  }

}
