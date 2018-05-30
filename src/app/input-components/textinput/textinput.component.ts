import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {

  private id: string;
  private label: string;
  private value: string;
  private textInputType: string;

  constructor() { }

  ngOnInit() {
  }

  public setId(id:string){
    this.id = id;
  }
  public setLabel(label:string){ 
    this.label = label;
  }
  public setTextInputType(textInputType:string){
    this.textInputType = textInputType;
  }
  public getCompleted(){
    return {id:this.id,inputType:"textinput",label:this.label,value:this.value}
  }
}
