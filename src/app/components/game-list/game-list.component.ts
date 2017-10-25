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

  constructor(
    private router: Router,
    private gameSvc: GameService,
    private sessionSvc: SessionService
  ) { }

  ngOnInit() {
    this.getGames();
  }

  gameClicked(gameKey) {
     this.getGameByKey(gameKey);
     this.saveSession(this.game);
     
    //  this.gameSvc.navigateToSessionSetup(this.game, savedSession);
    
  }

  getGames() {
    this.gameSvc.getGames().subscribe(games => {
      if (games)
        this.games = games;
      // console.log('onInit, games:', this.games);
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
    console.log(sessionToSave.gameName);
    
    const newSessionKey = this.sessionSvc.saveSession(sessionToSave);
    this.navigateToSessionSetup(newSessionKey);
  }

  navigateToSessionSetup(gameKey: any) {
    this.router.navigate(['session_setup', gameKey]);
  }

}
