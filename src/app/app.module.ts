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
import { AppComponent } from '../components/app/app.component';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    GameSelectionComponent
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
