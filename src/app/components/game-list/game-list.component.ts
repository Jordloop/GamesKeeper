import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: object[];
  game;
  noGames: boolean;

  constructor(
    private router: Router,
    private gameSvc: GameService,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    this.getGames();
    if(this.games){
      console.log(this.games);      
      // this.noGamesCheck();
    }

  }

  noGamesCheck() {
    if(this.games.length <= 0)
      this.noGames = true;
    else 
      this.noGames = false;

  }

  gameClicked(gameKey) {
     this.getGameByKey(gameKey);
     this.saveSession(this.game);
    
  }

  getGames() {
    this.gameSvc.getGames().subscribe(games => {
      if (games){
        this.games = games;
        this.noGamesCheck();
        // console.log('onInit, games:', this.games);
      }
    });

  }

  getGameByKey(gameKey) {
    this.gameSvc.getGameByKey(gameKey).subscribe(game => {
      if (game)
        this.game = game;
    });

  }

    saveSession(gameObj) {
    const sessionToSave = {
      gameKey: gameObj.$key,
      gameName: gameObj.name
    }
    const newSessionKey = this.sessionSvc.saveSession(sessionToSave);
    this.navigateToSessionSetup(newSessionKey);

  }

  navigateToSessionSetup(sessionKey: any) {
    this.router.navigate(['session_setup', sessionKey]);
    
  }

}
