import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMakerComponent } from './checkbox-maker.component';

describe('CheckboxMakerComponent', () => {
  let component: CheckboxMakerComponent;
  let fixture: ComponentFixture<CheckboxMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
