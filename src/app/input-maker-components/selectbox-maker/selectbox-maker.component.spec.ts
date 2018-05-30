import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectboxMakerComponent } from './selectbox-maker.component';

describe('SelectboxMakerComponent', () => {
  let component: SelectboxMakerComponent;
  let fixture: ComponentFixture<SelectboxMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectboxMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectboxMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
