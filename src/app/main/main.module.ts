import { NgModule } from '@angular/core';
import { FillInComponent } from '../fill-in/fill-in.component';
import { CreateComponent } from '../create/create.component';
import { ReviewComponent } from '../review/review.component';
import { MainComponent } from './main.component';
import { mainRouter } from './main.router';

@NgModule({
    declarations: [
        FillInComponent,
        CreateComponent,
        ReviewComponent
    ],
    imports: [
        mainRouter
    ],
    bootstrap:[
        MainComponent
    ]
})
export class MainModule {}