import{Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {CheckboxComponent} from './checkbox.component';

@Directive({selector: '[checkboxAnchor]'})
export class CheckboxAnchorDirective{

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver){}

    createCheckbox(checkboxComponent: { new(...args : any[]): CheckboxComponent },idParam,labelParam,valIdsParam,onlyOneCheckParam):
    ComponentRef<CheckboxComponent> {
        let checkboxComponentFactory = this.componentFactoryResolver.resolveComponentFactory(checkboxComponent);
        let checkboxComponentRef = this.viewContainer.createComponent(checkboxComponentFactory);

        checkboxComponentRef.instance.setId(idParam);
        checkboxComponentRef.instance.setLabel(labelParam);
        checkboxComponentRef.instance.setValIds(valIdsParam);
        checkboxComponentRef.instance.setOnlyOneCheck(onlyOneCheckParam);
        
        return checkboxComponentRef;
    }
}