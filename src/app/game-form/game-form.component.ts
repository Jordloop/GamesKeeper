import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  constructor(private gameSvc: GameService) { }
  
    saveGame (gameData) {
      console.log('component',gameData.value);
      this.gameSvc.saveGame(gameData.value)
    }

  ngOnInit() {
  }

}
