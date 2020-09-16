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

  currentPatterns: Pattern[];
  currentStrategy: Strategy;
  currentBasePattern: Pattern;
  currentBaseStrategy: Strategy;

  
  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.currentPatternsObservable.subscribe(a => {
        this.currentPatterns = a;
    });
    this.canvasSharedDataService.currentStrategyObservable.subscribe(a => {
        this.currentStrategy = a;
    });
    this.canvasSharedDataService.currentBasePatternObservable.subscribe(a => {
        this.currentBasePattern = a;
    });
    this.canvasSharedDataService.currentBaseStrategyObservable.subscribe(a => {
        this.currentBaseStrategy = a;
    });
  }

  selectBaseBusinessPattern(pattern: Pattern)
  {
    this.canvasSharedDataService.updateBasePattern(this.currentBasePattern && pattern.id == this.currentBasePattern.id ? null : pattern);
  }

  deleteBusinessPattern(pattern: Pattern)
  {
    if(this.currentBasePattern == pattern)
    {
      this.selectBaseBusinessPattern(pattern);
    }
    this.canvasSharedDataService.updateCurrentPattern(this.currentPatterns.filter(a => a.id != pattern.id));
  }

  selectedBusinessStrategy(strategy: Strategy)
  {
    this.canvasSharedDataService.updateBaseStrategy(this.currentBaseStrategy != null && strategy.id == this.currentBaseStrategy.id ? null : strategy);
  }

  deleteBusinessStrategy(strategy: Strategy)
  {
    if(this.currentBaseStrategy == strategy)
    {
      this.selectedBusinessStrategy(strategy);
    }
    this.currentStrategy = null;
  }

  checkIfPatternIsInCurrentPattern(pattern: Pattern)
  {
    return this.currentBasePattern == null ? false : pattern.id == this.currentBasePattern.id;
  }
}