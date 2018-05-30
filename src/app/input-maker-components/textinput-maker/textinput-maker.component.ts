import { Component, OnInit } from '@angular/core';
import { InputMakerComponent } from '../input-maker/input-maker.component';
import { CreateComponentService } from '../../../providers/create-component-provider/create-component.service';

@Component({
  selector: 'app-textinput-maker',
  templateUrl: './textinput-maker.component.html',
  styleUrls: ['./textinput-maker.component.css']
})
export class TextinputMakerComponent extends InputMakerComponent implements OnInit {

  private textInputType: string;
  constructor(private createComponentService: CreateComponentService) { 
    super();
    this.textInputType = "text";
  }

  ngOnInit() {
  }

  public getAll(){
    return {id:this.getId(),inputType:this.getInputType(),label:this.getLabel(),textInputType:this.textInputType};
  }

}
