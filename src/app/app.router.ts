
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { FillInFormComponent } from './fill-in-form/fill-in-form.component';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'fill-in',
        component: FillInComponent
    },
    {
        path: 'fill-in-form',
        component: FillInFormComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    }
];
export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);