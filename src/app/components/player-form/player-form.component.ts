import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  playerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    score: new FormControl('0'),
    totalSessionsPlayed: new FormControl('0'),
    totalSessionsWon: new FormControl('0')
  });
  useForm: boolean = false;

  constructor(private playerSvc: PlayerService) { }
  
  ngOnInit() {
  }

  formToggle() {
    this.useForm = !this.useForm;
  }

  createPlayer() {
    const playerData = this.playerForm.value;
    this.playerSvc.savePlayer(playerData);
    this.useForm = false;
  }

  get name() {
    return this.playerForm.get('name');
  }

}
