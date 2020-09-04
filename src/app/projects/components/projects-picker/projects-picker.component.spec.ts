import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPickerComponent } from './projects-picker.component';

describe('ProjectsPickerComponent', () => {
  let component: ProjectsPickerComponent;
  let fixture: ComponentFixture<ProjectsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
