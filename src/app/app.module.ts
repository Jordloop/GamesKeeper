import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Services
import { GameService } from './game.service';
import { PlayerService } from './player.service';
//Components
import { AppComponent } from './app.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ViewGamesComponent } from './view-games/view-games.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPlayersComponent,
    ViewGamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
