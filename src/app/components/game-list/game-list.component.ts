import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: object[];
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
      this.gameSvc.getGames().subscribe(games => {
      this.games = games;
      if(games)
        console.log(this.games);  
    })
  }

}
