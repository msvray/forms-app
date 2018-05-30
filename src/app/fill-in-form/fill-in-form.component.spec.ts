import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInFormComponent } from './fill-in-form.component';

describe('FillInFormComponent', () => {
  let component: FillInFormComponent;
  let fixture: ComponentFixture<FillInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
