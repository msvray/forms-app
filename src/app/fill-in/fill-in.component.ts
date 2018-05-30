import { Component, OnInit } from '@angular/core';
import { FillInComponentService } from '../../providers/fill-in-component-provider/fill-in-component.service';

@Component({
  selector: 'app-fill-in',
  templateUrl: './fill-in.component.html',
  styleUrls: ['./fill-in.component.css']
})
export class FillInComponent implements OnInit {
  private forms; 
  constructor(private fillInComponentService: FillInComponentService) { }
  
  ngOnInit() {
    this.forms = JSON.parse(localStorage.getItem('forms') || '[]');
    alert(localStorage.getItem('forms'));
  }

  private selectForm(index:number){
    this.fillInComponentService.setFormId(index);
  }

}
