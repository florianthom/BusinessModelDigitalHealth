import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModelPickerComponent } from './business-model-picker.component';

describe('BusinessModelPickerComponent', () => {
  let component: BusinessModelPickerComponent;
  let fixture: ComponentFixture<BusinessModelPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessModelPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessModelPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
