import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CreateComponentService {

  public deleteInputObservable: any;
    private deleteInputObserver: any;

    constructor(){
        this.deleteInputObservable = Observable.create((observer)=>{
            this.deleteInputObserver = observer;
        });
    }

    public deleteInput(id:string){
        this.deleteInputObserver.next(id);
    }

}
