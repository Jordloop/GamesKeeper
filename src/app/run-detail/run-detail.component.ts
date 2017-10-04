import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RunService } from '../services/run/run.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../services/player/player.service';


@Component({
  selector: 'run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css']
})
export class RunDetailComponent implements OnInit {
  runKey;
  run: FirebaseListObservable<any>;
  players;

  constructor(
    private runSvc: RunService,
    private playerSvc: PlayerService,
    private route: ActivatedRoute,
    private location: Location  
  ) { }

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.runKey = params['$key'];
    });
    this.runSvc.getRunByKey(this.runKey).subscribe(run => {
      this.run = run;
      this.runSvc.getPlayersByRunKey(this.runKey).subscribe(players => {
        this.players = players
        console.log(this.players);
                              
      });
      
    });  
    
  }   

  incrementScore(run, player) {
    console.log('component');
    
    this.playerSvc.incrementScore(run, player);
  }
  
}
// this.players = run.players;
// console.log(this.players);
    // console.log(this.players);
