import { Component } from '@angular/core';

@Component({
  selector: 'app-input-maker',
  templateUrl: './input-maker.component.html',
  styleUrls: ['./input-maker.component.css']
})
export class InputMakerComponent {
  private id: string;
  private inputType: string;
  public label: string;
  
  constructor() { }

  public setId(val:string){
    this.id = val;
  }
  public getId():string{
    return this.id;
  }
  public setInputType(val:string){
    this.inputType = val;
  }
  public getInputType(): string{
    return this.inputType;
  }
  public getLabel(): string{
    return this.label;
  }
}
