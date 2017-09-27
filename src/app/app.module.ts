import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Services
import { GameService } from './services/game.service';
import { PlayerService } from './services/player.service';
//Components
import { AppComponent } from './app.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ViewGamesComponent } from './view-games/view-games.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { GameFormComponent } from './game-form/game-form.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    ViewPlayersComponent,
    ViewGamesComponent,
    PlayerFormComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
