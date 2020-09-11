import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from "@app/graphql/generated/graphql";
import { ProjectsService } from "@app/projects/shared/projects.service";


@Component({
  selector: 'app-projects-picker',
  templateUrl: './projects-picker.component.html',
  styleUrls: ['./projects-picker.component.css']
})
export class ProjectsPickerComponent implements OnInit {

  projects$: Observable<Project[]>;


  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void
  {
    this.projects$ = this.projectService.getAllProjectsOfUser();
  }

}
