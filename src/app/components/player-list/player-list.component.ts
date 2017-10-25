import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: object[];
  player;

  constructor(private playerSvc: PlayerService) { }


  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerSvc.getPlayers().subscribe(players => {
      if(players)
        this.players = players;
    })
  }



}
