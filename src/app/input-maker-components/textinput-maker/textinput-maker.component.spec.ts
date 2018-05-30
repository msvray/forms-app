import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextinputMakerComponent } from './textinput-maker.component';

describe('TextinputMakerComponent', () => {
  let component: TextinputMakerComponent;
  let fixture: ComponentFixture<TextinputMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextinputMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextinputMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
