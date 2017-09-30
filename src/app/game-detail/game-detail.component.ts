import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game$key: string = null;
  game;

  constructor(
    private gameSvs: GameService,
    private route: ActivatedRoute,
    private location: Location)
   { }

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.game$key = params['$key'];
    })
    this.gameSvs.getGameByKey(this.game$key).subscribe(game => {
      this.game = game;

    })
  }

}
