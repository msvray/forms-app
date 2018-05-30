import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { CheckboxAnchorDirective } from '../input-components/checkbox/checkbox.directive';
import { CheckboxComponent } from '../input-components/checkbox/checkbox.component';
import { RadiobuttonAnchorDirective } from '../input-components/radiobutton/radiobutton.directive';
import { RadiobuttonComponent } from '../input-components/radiobutton/radiobutton.component';
import { SelectboxAnchorDirective } from '../input-components/selectbox/selectbox.directive';
import { SelectboxComponent } from '../input-components/selectbox/selectbox.component';
import { TextinputAnchorDirective } from '../input-components/textinput/textinput.directive';
import { TextinputComponent } from '../input-components/textinput/textinput.component';
import { FillInComponentService } from '../../providers/fill-in-component-provider/fill-in-component.service';

@Component({
  selector: 'app-fill-in-form',
  templateUrl: './fill-in-form.component.html',
  styleUrls: ['./fill-in-form.component.css'],
	entryComponents: [CheckboxComponent, RadiobuttonComponent, SelectboxComponent, TextinputComponent]
})
export class FillInFormComponent implements OnInit {
  @ViewChild(CheckboxAnchorDirective)  checkboxAnchor: CheckboxAnchorDirective;
	@ViewChild(CheckboxComponent) checkboxComponent: CheckboxComponent;
  @ViewChild(RadiobuttonAnchorDirective)  radiobuttonAnchor: RadiobuttonAnchorDirective;
	@ViewChild(RadiobuttonComponent) radiobuttonComponent: RadiobuttonComponent;
  @ViewChild(SelectboxAnchorDirective)  selectboxAnchor: SelectboxAnchorDirective;
	@ViewChild(SelectboxComponent) selectboxComponent: SelectboxComponent;
  @ViewChild(TextinputAnchorDirective)  textinputAnchor: TextinputAnchorDirective;
  @ViewChild(TextinputComponent) textinputComponent: TextinputComponent;
  
  private elements: {} = {};
  private formName: string = "";
  private name: string;

  constructor(private fillInComponentService: FillInComponentService) {
    
  }

  ngOnInit() {
    let forms = JSON.parse(localStorage.getItem('forms') || '[]');
    let selectedForm;
    let selectedFormId = this.fillInComponentService.getFormId();
    if(forms.length >= (selectedFormId + 1)){
      selectedForm = forms[selectedFormId];
      this.formName = selectedForm.name;
      if(selectedForm.formElements.length > 0){
        for(var i = 0; i < selectedForm.formElements.length; i++){
          switch(selectedForm.formElements[i]["inputType"]){
            case "checkbox":
              this.elements[selectedForm.formElements[i]["id"]] = this.checkboxAnchor.createCheckbox(CheckboxComponent,selectedForm.formElements[i]["id"],selectedForm.formElements[i]["label"],selectedForm.formElements[i]["values"],selectedForm.formElements[i]["onlyOneCheck"]);
              break;
            case "radiobutton":
              this.elements[selectedForm.formElements[i]["id"]] = this.radiobuttonAnchor.createRadiobutton(RadiobuttonComponent,selectedForm.formElements[i]["id"],selectedForm.formElements[i]["label"],selectedForm.formElements[i]["values"],selectedForm.formElements[i]["labelValsBy"]);
              break;
            case "selectbox":
              this.elements[selectedForm.formElements[i]["id"]] = this.selectboxAnchor.createSelectbox(SelectboxComponent,selectedForm.formElements[i]["id"],selectedForm.formElements[i]["label"],selectedForm.formElements[i]["values"],selectedForm.formElements[i]["viewAll"]);
              break;
            case "textinput":
              this.elements[selectedForm.formElements[i]["id"]] = this.textinputAnchor.createTextinput(TextinputComponent,selectedForm.formElements[i]["id"],selectedForm.formElements[i]["label"],selectedForm.formElements[i]["textInputType"]);
              break;
          }
        }
      }
    }
  }
  
  private completeTest(){
    if(!this.name)
      this.name = "Default Name";
    let keys = Object.keys(this.elements);
    let form = {name:this.name,formElements:[] as any[]};
    for(var i = 0; i < keys.length; i++){
      form.formElements.push(this.elements[keys[i]].instance.getCompleted());
      if(i == keys.length - 1){
        let testlist = JSON.parse(localStorage.getItem('tests') || '[]');
        testlist.push(form);
        localStorage.setItem("tests",JSON.stringify(testlist));
      }
    }
  }
}
