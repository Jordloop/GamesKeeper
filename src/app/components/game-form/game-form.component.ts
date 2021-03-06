import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameService } from '../../services/game/game.service';

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
  useForm: boolean = false;

  
  constructor(private gameSvc: GameService) { }
  
  ngOnInit() {
  }
  
  formToggle() {
    this.useForm = !this.useForm;
  }

  createGame() {
    const formData = this.gameForm.value;
    this.gameSvc.saveGame(formData);
    this.useForm = false;
  }

  get name() {
    return this.gameForm.get('name');
  }

}
