import { Component, OnInit, Input } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';
import { Pattern, Strategy, Canvas } from '@app/graphql/generated/graphql';
import { PatternService } from '@app/shared/services/pattern.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  currentPatterns: Pattern[];

  @Input()
  currentStrategy: Strategy;

  iconColorSelectBusinessModel: string = "";
  iconColorSelectBusinessStrategy: string = "";

  
  constructor(private patternService: PatternService, private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.changeMessage_changeStrategy(this.currentStrategy);
  }

  public selectedBusinessModel(pattern: Pattern)
  {
    console.log("pattern clicked");
    this.iconColorSelectBusinessModel = "warn";

    // is needed since without we dont have full pattern_obj (i think only id, name, ...)
    this.patternService.getPattern(pattern.id).subscribe(a =>
      this.canvasSharedDataService.changeMessage_changePattern(a)
    );
  }

  public selectedBusinessStrategy(strategy: Strategy)
  {
    console.log("strategy clicked: " + strategy.name);
    this.iconColorSelectBusinessStrategy = "warn";
    this.canvasSharedDataService.changeMessage_changeStrategy(strategy);
  }

}
