import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { ViewGamesComponent } from './view-games/view-games.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { RunDetailComponent } from './run-detail/run-detail.component';


const appRoutes: Routes = [
    {
        path: 'games',
        component: ViewGamesComponent
    },
    {
        path: 'games/:$key',
        component: GameDetailComponent
    },
    {
        path: 'player/:$key',
        component: PlayerDetailComponent
    },
    {
        path: 'run/:$key',
        component: RunDetailComponent
    },
    {
        path: 'players',
        component: ViewPlayersComponent
    },
    {
        path: 'scorecard',
        component: ScorecardComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);