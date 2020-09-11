import { Component, OnInit } from '@angular/core';
import { Canvas, Pattern, Strategy, StrategyPattern } from '@app/graphql/generated/graphql';
import { Observable } from 'rxjs';
import { CanvasService } from '@app/canvas/shared/canvas.service';
import {PatternService} from "@app/shared/services/pattern.service";
// import {} from "@app/"
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

  patterns$: Observable<Pattern[]>;
  canvas$: Observable<Canvas>;
  strategies$: Observable<Strategy[]>;
  strategyPattern$: Observable<StrategyPattern[]>;
  

  constructor
  (
      private canvasService: CanvasService,
      private patternService: PatternService,
      private strategyService: StrategyService,
      private canvasSharedDataService: CanvasSharedDataService,
      private route: ActivatedRoute,
      private router: Router
  )
  {
    
  }

  ngOnInit(): void
  {
    const projectId: string = this.route.snapshot.paramMap.get("project_id");
    const canvasId: string = this.route.snapshot.paramMap.get("canvas_id");

    this.patterns$ = this.patternService.getAllPattern();
    this.canvas$ = this.canvasService.getCanvasOfUser(canvasId);
    this.strategies$ = this.strategyService.getAllStrategies();
    // does currently only support 1 current pattern per canvas
    // this.strategyPattern$ = this.strategyPatternService.getWeightBetweenStrategyAndPatternByPatternId(patternid);
  }

}
