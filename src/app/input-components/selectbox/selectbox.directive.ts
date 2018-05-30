import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {SelectboxComponent} from './selectbox.component';

@Directive({selector: '[selectboxAnchor]'})
export class SelectboxAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createSelectbox(selectboxComponent: { new(...args : any[]): SelectboxComponent },idParam,labelParam,valIdsParam,viewAllParam):
    ComponentRef<SelectboxComponent> {
        let selectboxComponentFactory = this.componentFactoryResolver.resolveComponentFactory(selectboxComponent);
        let selectboxComponentRef = this.viewContainer.createComponent(selectboxComponentFactory);

        selectboxComponentRef.instance.setId(idParam);
        selectboxComponentRef.instance.setLabel(labelParam);
        selectboxComponentRef.instance.setValIds(valIdsParam);
        selectboxComponentRef.instance.setViewAll(viewAllParam);
        
        return selectboxComponentRef;
    }
}