import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {TextinputMakerComponent} from './textinput-maker.component';

@Directive({selector: '[textinputMakerAnchor]'})
export class TextinputMakerAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createTextinputMaker(textinputMakerComponent: { new(...args : any[]): TextinputMakerComponent },idParam:string):
    ComponentRef<TextinputMakerComponent> {
        let textinputMakerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(textinputMakerComponent);
        let textinputMakerComponentRef = this.viewContainer.createComponent(textinputMakerComponentFactory);

        textinputMakerComponentRef.instance.setId(idParam);
        textinputMakerComponentRef.instance.setInputType("textinput");
        
        return textinputMakerComponentRef;
    }
}