import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPickerCardComponent } from './projects-picker-card.component';

describe('ProjectsPickerCardComponent', () => {
  let component: ProjectsPickerCardComponent;
  let fixture: ComponentFixture<ProjectsPickerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPickerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
