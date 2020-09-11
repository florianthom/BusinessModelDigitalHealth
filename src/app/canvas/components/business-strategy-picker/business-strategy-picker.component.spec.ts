import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStrategyPickerComponent } from './business-strategy-picker.component';

describe('BusinessStrategyPickerComponent', () => {
  let component: BusinessStrategyPickerComponent;
  let fixture: ComponentFixture<BusinessStrategyPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessStrategyPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessStrategyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
