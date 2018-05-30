import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {CheckboxMakerComponent} from './checkbox-maker.component';

@Directive({selector: '[checkboxMakerAnchor]'})
export class CheckboxMakerAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createCheckboxMaker(checkboxMakerComponent: { new(...args : any[]): CheckboxMakerComponent },idParam:string):
    ComponentRef<CheckboxMakerComponent> {
        let checkboxMakerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(checkboxMakerComponent);
        let checkboxMakerComponentRef = this.viewContainer.createComponent(checkboxMakerComponentFactory);

        checkboxMakerComponentRef.instance.setId(idParam);
        checkboxMakerComponentRef.instance.setInputType("checkbox");
        
        return checkboxMakerComponentRef;
    }
}