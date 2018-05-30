import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {SelectboxMakerComponent} from './selectbox-maker.component';

@Directive({selector: '[selectboxMakerAnchor]'})
export class SelectboxMakerAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createSelectboxMaker(selectboxMakerComponent: { new(...args : any[]): SelectboxMakerComponent },idParam:string):
    ComponentRef<SelectboxMakerComponent> {
        let selectboxMakerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(selectboxMakerComponent);
        let selectboxMakerComponentRef = this.viewContainer.createComponent(selectboxMakerComponentFactory);

        selectboxMakerComponentRef.instance.setId(idParam);
        selectboxMakerComponentRef.instance.setInputType("selectbox");
        return selectboxMakerComponentRef;
    }
}