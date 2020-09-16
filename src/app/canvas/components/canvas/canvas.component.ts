import { Component, OnInit } from '@angular/core';
import { Canvas, Pattern, Strategy, StrategyPattern } from '@app/graphql/generated/graphql';
import { Observable } from 'rxjs';
import { CanvasService } from '@app/canvas/shared/canvas.service';
import {PatternService} from "@app/shared/services/pattern.service";
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { StrategyService } from '@app/shared/services/strategy.service';
import { StrategyPatternService } from '@app/shared/services/strategy-pattern.service';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor
  (
    private canvasSharedDataService: CanvasSharedDataService,
    private canvasService: CanvasService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    
  }

  ngOnInit(): void
  {
    const projectId: string = this.route.snapshot.paramMap.get("project_id");
    const canvasId: string = this.route.snapshot.paramMap.get("canvas_id");
    this.canvasService.getCanvasOfUser(canvasId).subscribe( a => 
      this.canvasSharedDataService.update_canvas(a)
    );
  }

}
