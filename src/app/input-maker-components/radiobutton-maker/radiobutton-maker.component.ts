import { Component, OnInit } from '@angular/core';
import { InputMakerComponent } from '../input-maker/input-maker.component';
import { CreateComponentService } from '../../../providers/create-component-provider/create-component.service';

@Component({
  selector: 'app-radiobutton-maker',
  templateUrl: './radiobutton-maker.component.html',
  styleUrls: ['./radiobutton-maker.component.css']
})
export class RadiobuttonMakerComponent extends InputMakerComponent implements OnInit {
  
  private valIds: String[] = [];
  private values: String[] = [];
  private labelValsBy: string;
  constructor(private createComponentService: CreateComponentService) { 
    super();
    this.labelValsBy = "No";
  }

  ngOnInit() {
  }

  private addValue(){
    this.values.push("");
    this.valIds.push("value"+this.valIds.length);
  }

  public getAll(){
    return {id:this.getId(),inputType:this.getInputType(),label:this.getLabel(),values:this.values,labelValsBy:this.labelValsBy};
  }

}
