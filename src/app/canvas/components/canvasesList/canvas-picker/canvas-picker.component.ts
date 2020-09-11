import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Canvas } from "@app/graphql/generated/graphql";
import { CanvasService } from "@app/canvas/shared/canvas.service";
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-canvas-picker',
  templateUrl: './canvas-picker.component.html',
  styleUrls: ['./canvas-picker.component.css']
})
export class CanvasPickerComponent implements OnInit {

  canvases$: Observable<Canvas[]>;


  constructor(private canvasService: CanvasService, private route: ActivatedRoute, private router: Router)
  {

  }

  ngOnInit(): void
  {
    const projectId: string = this.route.snapshot.paramMap.get("project_id");
    this.canvases$ = this.canvasService.getCanvasesOfUserOfProject(projectId);
  }

}
