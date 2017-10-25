import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { SessionSetupComponent } from './components/session-setup/session-setup.component';


const appRoutes: Routes = [
    {
        path: 'game_selection',
        component: GameSelectionComponent
    },
    {
        path: 'scorecard',
        component: ScorecardComponent
    },
    {
        path: 'session_setup/:id',
        component: SessionSetupComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);