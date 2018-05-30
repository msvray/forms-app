import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  private tests; 

  constructor() { }

  ngOnInit() {
    this.tests = JSON.parse(localStorage.getItem('tests') || '[]');
    alert(localStorage.getItem('tests'));
  }

  private selectTest(index:number){
  }

}
