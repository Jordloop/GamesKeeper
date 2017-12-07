import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  players: object[] = [
    {
      name: "Jordan",
      score: 0
    },    
    {
      name: "Katie",
      score: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
