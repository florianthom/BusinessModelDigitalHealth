import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@app/graphql/generated/graphql';
// import { CustomDatepipePipe } from "@app/shared/pipes/custom-datepipe.pipe";

@Component({
  selector: 'app-projects-picker-card',
  templateUrl: './projects-picker-card.component.html',
  styleUrls: ['./projects-picker-card.component.css']
})
export class ProjectsPickerCardComponent implements OnInit {

  @Input()
  project: Project;

  constructor() { }

  ngOnInit(): void {
    this.project.updatedAt
  }

}
