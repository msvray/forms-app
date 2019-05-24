import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { appRouter } from './app.router';
import { AppComponent } from './app.component';

//page components
import { MainComponent } from './main/main.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';
import { FillInFormComponent } from './fill-in-form/fill-in-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';

//create components/directives
import { CheckboxAnchorDirective } from './input-components/checkbox/checkbox.directive';
import { CheckboxComponent } from './input-components/checkbox/checkbox.component';
import { SelectboxAnchorDirective } from './input-components/selectbox/selectbox.directive';
import { SelectboxComponent } from './input-components/selectbox/selectbox.component';
import { RadiobuttonAnchorDirective } from './input-components/radiobutton/radiobutton.directive';
import { RadiobuttonComponent } from './input-components/radiobutton/radiobutton.component';
import { TextinputAnchorDirective } from './input-components/textinput/textinput.directive';
import { TextinputComponent } from './input-components/textinput/textinput.component';
import { TextinputMakerAnchorDirective } from './input-maker-components/textinput-maker/textinput-maker.directive';
import { TextinputMakerComponent } from './input-maker-components/textinput-maker/textinput-maker.component';
import { RadiobuttonMakerAnchorDirective } from './input-maker-components/radiobutton-maker/radiobutton-maker.directive';
import { RadiobuttonMakerComponent } from './input-maker-components/radiobutton-maker/radiobutton-maker.component';
import { SelectboxMakerAnchorDirective } from './input-maker-components/selectbox-maker/selectbox-maker.directive';
import { SelectboxMakerComponent } from './input-maker-components/selectbox-maker/selectbox-maker.component';
import { CheckboxMakerAnchorDirective } from './input-maker-components/checkbox-maker/checkbox-maker.directive';
import { CheckboxMakerComponent } from './input-maker-components/checkbox-maker/checkbox-maker.component';
import { InputMakerComponent } from './input-maker-components/input-maker/input-maker.component';

//providers
import { CreateComponentService } from '../providers/create-component-provider/create-component.service';
import { FillInComponentService } from '../providers/fill-in-component-provider/fill-in-component.service';
import { ReviewComponentService } from '../providers/review-component-provider/review-component.service';


@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    FillInComponent,
    CreateComponent,
    ReviewComponent,
    FillInFormComponent,
    ReviewFormComponent,
    //fill in components/directives
    CheckboxAnchorDirective,
    CheckboxComponent,
    SelectboxAnchorDirective,
    SelectboxComponent,
    RadiobuttonAnchorDirective,
    RadiobuttonComponent,
    TextinputAnchorDirective,
    TextinputComponent,
    //create components/directives
    InputMakerComponent,
    TextinputMakerAnchorDirective,
    TextinputMakerComponent,
    RadiobuttonMakerAnchorDirective,
    RadiobuttonMakerComponent,
    SelectboxMakerAnchorDirective,
    SelectboxMakerComponent,
    CheckboxMakerAnchorDirective,
    CheckboxMakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    appRouter
  ],
  providers: [
    CreateComponentService,
    FillInComponentService,
    ReviewComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
