import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { ViewGamesComponent } from './view-games/view-games.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ScorecardComponent } from './scorecard/scorecard.component';


const appRoutes: Routes = [
    {
        path: 'games',
        component: ViewGamesComponent
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