import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: object[];
  game;

  constructor(
    private router: Router,
    private gameSvc: GameService
  ) { }

  ngOnInit() {
    this.getGames();
  }

  gameClicked(gameKey) {
    this.getGameByKey(gameKey);
    this.gameSvc.navigateToSessionSetup(this.game.name);
  }

  getGames() {
    this.gameSvc.getGames().subscribe(games => {
      if (games)
        this.games = games;
      console.log('onInit, games:', this.games);
    });
  }

  getGameByKey(gameKey) {
    this.gameSvc.getGameByKey(gameKey).subscribe(game => {
      if(game)
        this.game = game;
        console.log(`onClick, game: ${gameKey}`, this.game);
    });
  }

}
