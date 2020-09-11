import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPickerComponent } from './canvas-picker.component';

describe('CanvasPickerComponent', () => {
  let component: CanvasPickerComponent;
  let fixture: ComponentFixture<CanvasPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
