import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModelCardComponent } from './business-model-card.component';

describe('BusinessModelCardComponent', () => {
  let component: BusinessModelCardComponent;
  let fixture: ComponentFixture<BusinessModelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessModelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
