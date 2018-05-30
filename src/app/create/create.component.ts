import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxMakerAnchorDirective } from '../input-maker-components/checkbox-maker/checkbox-maker.directive';
import { CheckboxMakerComponent } from '../input-maker-components/checkbox-maker/checkbox-maker.component';
import { RadiobuttonMakerAnchorDirective } from '../input-maker-components/radiobutton-maker/radiobutton-maker.directive';
import { RadiobuttonMakerComponent } from '../input-maker-components/radiobutton-maker/radiobutton-maker.component';
import { SelectboxMakerAnchorDirective } from '../input-maker-components/selectbox-maker/selectbox-maker.directive';
import { SelectboxMakerComponent } from '../input-maker-components/selectbox-maker/selectbox-maker.component';
import { TextinputMakerAnchorDirective } from '../input-maker-components/textinput-maker/textinput-maker.directive';
import { TextinputMakerComponent } from '../input-maker-components/textinput-maker/textinput-maker.component';
import { CreateComponentService } from '../../providers/create-component-provider/create-component.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
	entryComponents: [CheckboxMakerComponent, RadiobuttonMakerComponent, SelectboxMakerComponent, TextinputMakerComponent]
})
export class CreateComponent implements OnInit {
  @ViewChild(CheckboxMakerAnchorDirective)  checkboxMakerAnchor: CheckboxMakerAnchorDirective;
	@ViewChild(CheckboxMakerComponent) checkboxMakerComponent: CheckboxMakerComponent;
  @ViewChild(RadiobuttonMakerAnchorDirective)  radiobuttonMakerAnchor: RadiobuttonMakerAnchorDirective;
	@ViewChild(RadiobuttonMakerComponent) radiobuttonMakerComponent: RadiobuttonMakerComponent;
  @ViewChild(SelectboxMakerAnchorDirective)  selectboxMakerAnchor: SelectboxMakerAnchorDirective;
	@ViewChild(SelectboxMakerComponent) selectboxMakerComponent: SelectboxMakerComponent;
  @ViewChild(TextinputMakerAnchorDirective)  textinputMakerAnchor: TextinputMakerAnchorDirective;
	@ViewChild(TextinputMakerComponent) textinputMakerComponent: TextinputMakerComponent;

  private elements: {} = {};
  private count: number = 0;
  private name: string;
  //private elementData: any[];

  constructor(private modalService: NgbModal,
              private createComponentService: CreateComponentService) {
    
  }

  ngOnInit() {  
    /*        alert(localStorage.getItem('elements'));
    this.elementData = JSON.parse(localStorage.getItem('elements') || '[]');
    if(!this.elementData)
      this.elementData = [];
    else if(this.elementData.length > 0){
      for(var i = 0; i < this.elementData.length; i++){
        switch(this.elementData[i]["type"]){
          case "checkbox":
            this.elements[this.elementData[i]["id"]] = this.checkboxMakerAnchor.createCheckboxMaker(CheckboxMakerComponent,this.elementData[i]["id"]);
            break;
          case "radiobutton":
            this.elements[this.elementData[i]["id"]] = this.radiobuttonMakerAnchor.createRadiobuttonMaker(RadiobuttonMakerComponent,this.elementData[i]["id"]);
            break;
          case "selectbox":
            this.elements[this.elementData[i]["id"]] = this.selectboxMakerAnchor.createSelectboxMaker(SelectboxMakerComponent,this.elementData[i]["id"]);
            break;
          case "textinput":
            this.elements[this.elementData[i]["id"]] = this.textinputMakerAnchor.createTextinputMaker(TextinputMakerComponent,this.elementData[i]["id"]);
            break;
        }
      }
    }*/
    this.createComponentService.deleteInputObservable.subscribe((id)=>{
      this.deleteInput(id);
    });
  }

  private addCheckbox(){
    let id = "checkboxIndexed" + this.count;
    this.elements[id] = (this.checkboxMakerAnchor.createCheckboxMaker(CheckboxMakerComponent,id));
    //this.elementData.push({id:id,type:"checkbox"});
    //localStorage.setItem("elements",JSON.stringify(this.elementData));
    this.count++;
  }

  private addRadiobutton(){
    let id = "radiobuttonIndexed" + this.count;
    this.elements[id] = (this.radiobuttonMakerAnchor.createRadiobuttonMaker(RadiobuttonMakerComponent,id));
    //this.elementData.push({id:id,type:"radiobutton"});
    //localStorage.setItem("elements",JSON.stringify(this.elementData));
    this.count++;
  }

  private addSelectbox(){
    let id = "selectboxIndexed" + this.count;
    this.elements[id] = (this.selectboxMakerAnchor.createSelectboxMaker(SelectboxMakerComponent,id));
    //this.elementData.push({id:id,type:"selectbox"});
    //localStorage.setItem("elements",JSON.stringify(this.elementData));
    //alert(localStorage.getItem('elements'));
    this.count++;
  }

  private addTextinput(){
    let id = "textinputIndexed" + this.count;
    this.elements[id] = (this.textinputMakerAnchor.createTextinputMaker(TextinputMakerComponent,id));
    //this.elementData.push({id:id,type:"textinput"});
    //localStorage.setItem("elements",JSON.stringify(this.elementData));
    this.count++;
  }

  private addInput(content){
    this.modalService.open(content).result.then((result) => {
      this[result]();
    }, (reason) => {
    });
  }
  private saveTest(){
    if(!this.name)
      this.name = "Default Name";
    let keys = Object.keys(this.elements);
    let form = {name:this.name,formElements:[] as any[]};
    for(var i = 0; i < keys.length; i++){
      form.formElements.push(this.elements[keys[i]].instance.getAll());
      if(i == keys.length - 1){
        let formlist = JSON.parse(localStorage.getItem('forms') || '[]');
        formlist.push(form);
        localStorage.setItem("forms",JSON.stringify(formlist));
      }
    }
  }
  private deleteInput(id:string){
    this.elements[id].destroy();
    /*for(var i = 0; i < this.elementData.length; i++){
      if(this.elementData[i]["id"] == id){
        this.elementData.splice(i,1);
      }
    }*/
    delete this.elements[id];
  }
}
