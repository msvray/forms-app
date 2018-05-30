import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {RadiobuttonMakerComponent} from './radiobutton-maker.component';

@Directive({selector: '[radiobuttonMakerAnchor]'})
export class RadiobuttonMakerAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createRadiobuttonMaker(radiobuttonMakerComponent: { new(...args : any[]): RadiobuttonMakerComponent },idParam:string):
    ComponentRef<RadiobuttonMakerComponent> {
        let radiobuttonMakerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(radiobuttonMakerComponent);
        let radiobuttonMakerComponentRef = this.viewContainer.createComponent(radiobuttonMakerComponentFactory);

        radiobuttonMakerComponentRef.instance.setId(idParam);
        radiobuttonMakerComponentRef.instance.setInputType("radiobutton");
        
        return radiobuttonMakerComponentRef;
    }
}