import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPickerComponent } from './components/projects-picker/projects-picker.component';
import { ProjectsPickerCardComponent } from './components/projects-picker-card/projects-picker-card.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [ProjectsPickerComponent, ProjectsPickerCardComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
