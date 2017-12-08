import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { routing } from './app.routing';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
          MatCardModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule } from '@angular/material';
//Services
import { GameService } from './services/game/game.service';
import { PlayerService } from './services/player/player.service';
import { SessionService } from './services/session/session.service';
//Components
import { AppComponent } from './app.component';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { SessionSetupComponent } from './components/session-setup/session-setup.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { SessionDetailComponent } from './components/session-detail/session-detail.component';
import { ScoreAdjustComponent } from './components/score-adjust/score-adjust.component';
import { ScorecardScoreComponent } from './scorecard-score/scorecard-score.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    GameSelectionComponent,
    ScorecardComponent,
    GameListComponent,
    GameFormComponent,
    PlayerDetailComponent,
    PlayerListComponent,
    SessionSetupComponent,
    PlayerFormComponent,
    GameDetailComponent,
    SessionDetailComponent,
    ScoreAdjustComponent,
    ScorecardScoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    //  Angular Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  providers: [
    GameService,
    PlayerService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
