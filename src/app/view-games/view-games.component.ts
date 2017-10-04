import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { RunService } from '../services/run/run.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/Rx';

@Component({
  selector: 'view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  title = "Games";
  viewGameForm = false;
  @Input() games;
  runs$: FirebaseListObservable<any>;
  newRun;

  constructor(
    private gameSvc: GameService,
    private runSvc: RunService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe(games => {
      this.games = games;
    });
    this.runSvc.getAllRuns().subscribe(runs => {
      this.newRun = runs[runs.length-1];
      console.log(this.newRun);
    })
  }

  createRun(game) {
    this.runSvc.createRun(game);
    this.runSvc.navigateToRunDetail(this.newRun.$key);    
  }

  navigateToGameDetail(game) {
    this.gameSvc.navigateToGameDetail(game.$key);
  }

  gameFormToggle() {
    this.viewGameForm ? this.viewGameForm = false : this.viewGameForm = true;
  }

}
