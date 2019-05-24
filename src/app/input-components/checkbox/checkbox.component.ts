import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  private id: string;
  private label: string;
  private valIds: string[];
  private values: boolean[];
  private onlyOneCheck: boolean;

  constructor() { }

  ngOnInit() {

  }

  public setId(id:string){
    this.id = id;
  }
  public setLabel(label:string){ 
    this.label = label;
  }
  public setValIds(valIds:string[]){
    this.values = [] as boolean[];
    this.valIds = valIds;
    for(var i = 0; i < this.valIds.length; i++){
      this.values.push(false);
    }
  }
  public setOnlyOneCheck(onlyOneCheck:boolean){
    this.onlyOneCheck = onlyOneCheck;
  }
  public getCompleted(){
    let checkedLabels = [] as string[];
    for(var i = 0; i < this.values.length; i++){
      if(this.values[i]){
        checkedLabels.push(this.valIds[i]);
      }
    }
    return {id:this.id,inputType:"checkbox",label:this.label,checkedLabels:checkedLabels}
  }

  private uncheckOthers(index:number){
    if(this.onlyOneCheck){
      for(var i = 0; i < this.values.length; i++){
        if(i != index){
          this.values[i] = false;
        }
      }
    }
  }
}
