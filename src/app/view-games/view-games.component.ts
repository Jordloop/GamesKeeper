import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  title = "Games";
  @Input() games;
  viewGameForm = false;

  constructor(private gameSvc: GameService) {}

  ngOnInit() {
    this.gameSvc.getGames().subscribe(games => {
      this.games = games;
      
    });
  }

  gameFormToggle() {
    this.viewGameForm ? this.viewGameForm = false : this.viewGameForm = true;
  }

}
