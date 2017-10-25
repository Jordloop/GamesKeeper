import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  gameForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    sessionsCount: new FormControl('0')
  });

  get name() {
    return this.gameForm.get('name');
  }

  constructor() { }

  ngOnInit() {
  }

  createGame() {
    console.log(this.gameForm.value);
  }

}
