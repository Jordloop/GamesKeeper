import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css']
})
export class GameSelectionComponent implements OnInit {

  gameData: any = {
    name: "Dominion",
    sessionsCount: 0
  };
  
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    // console.log('gameData component', this.gameData);    
    // this.gameSvc.saveGame(this.gameData);
  }


}
