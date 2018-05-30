import { Component, OnInit } from '@angular/core';
import { InputMakerComponent } from '../input-maker/input-maker.component';
import { CreateComponentService } from '../../../providers/create-component-provider/create-component.service';

@Component({
  selector: 'app-selectbox-maker',
  templateUrl: './selectbox-maker.component.html',
  styleUrls: ['./selectbox-maker.component.css']
})
export class SelectboxMakerComponent extends InputMakerComponent implements OnInit {

  private valIds: String[] = [];
  private values: String[] = [];
  private viewAll: boolean = false;
  constructor(private createComponentService: CreateComponentService) {
    super(); 
  }

  ngOnInit() {
  }

  private addValue(){
    this.values.push("");
    this.valIds.push("value"+this.valIds.length);
  }

  public getAll(){
    return {id:this.getId(),inputType:this.getInputType(),label:this.getLabel(),values:this.values,viewAll:this.viewAll};
  }

}
