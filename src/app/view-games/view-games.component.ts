import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { RunService } from '../services/run/run.service';

@Component({
  selector: 'view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  title = "Games";
  @Input() games;
  game$;
  viewGameForm = false;

  constructor(
    private gameSvc: GameService,
    private runSvc: RunService
    ) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe(games => {
      this.games = games;
    });
    this.gameSvc.getGameByKey("-KvJMaQl4F_hHikoIWHy").subscribe(console.log);
  }


  createRun(game) {
    console.log(game);
    this.runSvc.createRun(game);
    
  }


  navigateToGameDetail(game) {
    console.log('boop');
    
    this.gameSvc.navigateToGameDetail(game.$key);
  }

  gameFormToggle() {
    this.viewGameForm ? this.viewGameForm = false : this.viewGameForm = true;
  }

}
