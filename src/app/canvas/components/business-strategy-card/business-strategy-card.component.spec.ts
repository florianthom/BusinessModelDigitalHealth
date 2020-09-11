import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStrategyCardComponent } from './business-strategy-card.component';

describe('BusinessStrategyCardComponent', () => {
  let component: BusinessStrategyCardComponent;
  let fixture: ComponentFixture<BusinessStrategyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessStrategyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessStrategyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
