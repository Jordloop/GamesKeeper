import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent {
  title = "Games";
  games;

  constructor(service: GameService) {
    this.games = service.getGames();
  }

}
