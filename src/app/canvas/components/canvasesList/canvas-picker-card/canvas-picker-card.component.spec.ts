import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPickerCardComponent } from './canvas-picker-card.component';

describe('CanvasPickerCardComponent', () => {
  let component: CanvasPickerCardComponent;
  let fixture: ComponentFixture<CanvasPickerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPickerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
