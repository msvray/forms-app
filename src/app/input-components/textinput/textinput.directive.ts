import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {TextinputComponent} from './textinput.component';

@Directive({selector: '[textinputAnchor]'})
export class TextinputAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createTextinput(textinputComponent: { new(...args : any[]): TextinputComponent },idParam,labelParam,textInputTypeParam):
    ComponentRef<TextinputComponent> {
        let textinputComponentFactory = this.componentFactoryResolver.resolveComponentFactory(textinputComponent);
        let textinputComponentRef = this.viewContainer.createComponent(textinputComponentFactory);

        textinputComponentRef.instance.setId(idParam);
        textinputComponentRef.instance.setLabel(labelParam);
        textinputComponentRef.instance.setTextInputType(textInputTypeParam);

        return textinputComponentRef;
    }
}