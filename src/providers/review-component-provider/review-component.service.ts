import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewComponentService {
    private formIndex: number; 
    constructor() { }
  
    public setFormId(index:number){
      this.formIndex = index;
    }
  
    public getFormId(): number{
      return this.formIndex;
    }
}
