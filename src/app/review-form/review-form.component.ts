import { Component, OnInit } from '@angular/core';
import { ReviewComponentService } from '../../providers/review-component-provider/review-component.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  private selectedTest: any;

  constructor(private reviewComponentService: ReviewComponentService) { }

  ngOnInit() {
    let test = JSON.parse(localStorage.getItem('tests') || '[]');
    let selectedTestId = this.reviewComponentService.getFormId();
    if(test.length >= (selectedTestId + 1)){
      this.selectedTest = test[selectedTestId];
      if(this.selectedTest.formElements.length > 0){
        for(var i = 0; i < this.selectedTest.formElements.length; i++){
          switch(this.selectedTest.formElements[i]["inputType"]){
            case "checkbox":
              this.selectedTest.formElements[i] = {"selectedText": "Selected", "label": this.selectedTest.formElements[i].label, "value": this.selectedTest.formElements[i].checkedLabels};
              break;
            case "radiobutton":
            case "selectbox":
              this.selectedTest.formElements[i] = {"selectedText": "Selected", "label": this.selectedTest.formElements[i].label, "value": this.selectedTest.formElements[i].value};
              break;
            case "textinput":
              this.selectedTest.formElements[i] = {"selectedText": "Response", "label": this.selectedTest.formElements[i].label, "value": this.selectedTest.formElements[i].value};
              break;
          }
        }
      }
    }
  }

}
