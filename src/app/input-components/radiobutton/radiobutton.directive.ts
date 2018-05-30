import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {RadiobuttonComponent} from './radiobutton.component';

@Directive({selector: '[radiobuttonAnchor]'})
export class RadiobuttonAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createRadiobutton(radiobuttonComponent: { new(...args : any[]): RadiobuttonComponent },idParam,labelParam,valIdsParam,labelValsByParam):
    ComponentRef<RadiobuttonComponent> {
        let radiobuttonComponentFactory = this.componentFactoryResolver.resolveComponentFactory(radiobuttonComponent);
        let radiobuttonComponentRef = this.viewContainer.createComponent(radiobuttonComponentFactory);
        
        radiobuttonComponentRef.instance.setId(idParam);
        radiobuttonComponentRef.instance.setLabel(labelParam);
        radiobuttonComponentRef.instance.setValIds(valIdsParam);
        radiobuttonComponentRef.instance.setLabelValsBy(labelValsByParam);
        
        return radiobuttonComponentRef;
    }
}