import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css']
})
export class GameSelectionComponent implements OnInit {
  gameKey: string = "-KxFUCmUOw9JnLHHPmVT";
  game: object;
  games: object[];
  gameData: any = {
    name: "Carcassonne",
    sessionsCount: 0
  };
  
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    // this.gameSvc.getGameByKey(this.gameKey).subscribe(game => {
    //   if(game)
    //     this.game = game
    // })
    // this.gameSvc.getGames().subscribe(games => {
    //   this.games = games;
    //   if(games)
    //     console.log(this.games);  
    // })
    // console.log('gameData component', this.gameData);    
    // this.gameSvc.saveGame(this.gameData);
  }


}
