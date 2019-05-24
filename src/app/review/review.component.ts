import { Component, OnInit } from '@angular/core';
import { ReviewComponentService } from '../../providers/review-component-provider/review-component.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  private tests; 

  constructor(private reviewComponentService: ReviewComponentService) { }

  ngOnInit() {
    this.tests = JSON.parse(localStorage.getItem('tests') || '[]');
    alert(localStorage.getItem('tests'));
  }

  private selectTest(index:number){
    this.reviewComponentService.setFormId(index);
  }

}
