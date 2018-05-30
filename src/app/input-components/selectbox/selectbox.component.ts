import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css']
})
export class SelectboxComponent implements OnInit {
  private id: string;
  private label: string;
  private valIds: string[];
  private value: string;
  private viewAll: boolean;

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
  public setViewAll(viewAll:boolean){
    this.viewAll = viewAll;
  }
  public getCompleted(){
    return {id:this.id,inputType:"selectbox",label:this.label,value:this.value}
  }
}
