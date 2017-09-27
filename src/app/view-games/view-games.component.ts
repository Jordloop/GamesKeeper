import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  title = "Games";
  games;

  constructor(private gameSvc: GameService) {}

  ngOnInit() {
    this.gameSvc.getGames().subscribe(games => {
      this.games = games;
      console.log('games:', this.games);
      
    });
  }

}
