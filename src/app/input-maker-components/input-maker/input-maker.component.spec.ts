import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMakerComponent } from './input-maker.component';

describe('InputMakerComponent', () => {
  let component: InputMakerComponent;
  let fixture: ComponentFixture<InputMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
