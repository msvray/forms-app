import { Injectable } from '@angular/core';

@Injectable()
export class FillInComponentService {
  private formIndex: number; 
  constructor() { }

  public setFormId(index:number){
    this.formIndex = index;
  }

  public getFormId(): number{
    return this.formIndex;
  }
}
