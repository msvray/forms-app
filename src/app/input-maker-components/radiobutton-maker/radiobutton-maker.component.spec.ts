import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonMakerComponent } from './radiobutton-maker.component';

describe('RadiobuttonMakerComponent', () => {
  let component: RadiobuttonMakerComponent;
  let fixture: ComponentFixture<RadiobuttonMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobuttonMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
