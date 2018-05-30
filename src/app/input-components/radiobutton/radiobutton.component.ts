import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  private id: string;
  private label: string;
  private valIds: string[];
  private value: string;
  private labelList: string[];

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
    this.valIds = valIds;
  }
  public setLabelValsBy(labelValsBy:string){
    switch(labelValsBy){
      case "Alphabetically":
        this.labelList = ["A.","B.","C.","D.","E."];
        break;
      case "Numerically":
        this.labelList = ["1.","2.","3.","4.","5."];
        break;
      default:
        this.labelList = ["","","","",""];
        break;
    }
  }
  public getCompleted(){
    return {id:this.id,inputType:"radiobutton",label:this.label,value:this.value}
  }

}
