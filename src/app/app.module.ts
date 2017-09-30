import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Services
import { GameService } from './services/game/game.service';
import { PlayerService } from './services/player/player.service';
import { RunService } from './services/run/run.service';
//Components
import { AppComponent } from './app.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ViewGamesComponent } from './view-games/view-games.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { GameFormComponent } from './game-form/game-form.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

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
    GameFormComponent,
    ScorecardComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],

  providers: [
    GameService,
    PlayerService,
    RunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
