import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { GameSelectionComponent } from './components/game-selection/game-selection.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GameSelectionComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);