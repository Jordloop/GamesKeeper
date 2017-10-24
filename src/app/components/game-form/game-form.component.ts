import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    sessionsCount: new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

}
