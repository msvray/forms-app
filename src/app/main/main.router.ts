
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillInComponent } from '../fill-in/fill-in.component';
import { CreateComponent } from '../create/create.component';
import { ReviewComponent } from '../review/review.component';

export const mainRoutes: Routes = [
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'fill-in',
        component: FillInComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    }
];
export const mainRouter: ModuleWithProviders = RouterModule.forRoot(mainRoutes);