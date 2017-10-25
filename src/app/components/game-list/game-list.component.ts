import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: object[];
  game: object;
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    this.getGames();
  }
  

  getGameByKey(gameKey) {
    this.gameSvc.getGameByKey(gameKey).subscribe(game => {
      if(game)
        this.game = game;
        console.log(`onClick, game: ${gameKey}`, this.game);
    });
  }

  getGames() {
    this.gameSvc.getGames().subscribe(games => {
      if (games)
        this.games = games;
      console.log('onInit, games:', this.games);
    });
  }

}
