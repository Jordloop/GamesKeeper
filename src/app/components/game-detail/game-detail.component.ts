import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../../services/game/game.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  gameKey: string = null;
  game;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gameSvc: GameService
  ) { }

  ngOnInit() {
    this.getGameKeyViaRoute();
    this.getGameByKey(this.gameKey);
  }

  getGameKeyViaRoute() {
    this.route.params.forEach((param) => {
      if(param)
        this.gameKey = (param['id']);
    });
    console.log('onInit, gameKey:', this.gameKey);
  }

  getGameByKey(gameKey) {
    this.gameSvc.getGameByKey(gameKey).subscribe(game => {
      if (game)
        this.game = game;
      console.log(`onInit, game: ${gameKey}`, this.game);
    });
  }

}
