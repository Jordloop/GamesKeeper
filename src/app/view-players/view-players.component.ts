import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../services/player/player.service'
import { GameService } from '../services/game/game.service';
import { RunService } from '../services/run/run.service';

@Component({
  selector: 'view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {
  title = "Players";
  @Input() players;
  viewPlayerForm = false;
  newRun;

  constructor(
    private playerSvc: PlayerService,
    private gameSvc: GameService,
    private runSvc: RunService
  ) {}

  ngOnInit() {
    this.playerSvc.getAllPlayers().subscribe(players => {
      this.players = players;
    });
    debugger
    this.runSvc.getAllRuns().last().subscribe(run => {
      this.newRun = run;
      console.log(`run: ${run} newRun ${this.newRun}`);  
      console.log(run);
      console.log(this.newRun);
      
    })
  }

  playerFormToggle() {
    this.viewPlayerForm ? this.viewPlayerForm = false : this.viewPlayerForm = true;
  }

  addPlayerToRun(player) {
    console.log(player);
    
    this.runSvc.addPlayerToRun(this.newRun, player);
  }

  incrementScore(player) {
    player.score += 1;
    console.log(`player: ${player.name} score: ${player.score}`);
  }

  decrementScore(player) {
    player.score -= 1;
    console.log(`player: ${player.name} score: ${player.score}`);
  }


}
