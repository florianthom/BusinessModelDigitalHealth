import { Injectable } from '@angular/core';
import { Canvas, Pattern, Strategy, StrategyPattern } from '@app/graphql/generated/graphql';
import { PatternService } from '@app/shared/services/pattern.service';
import { StrategyPatternService } from '@app/shared/services/strategy-pattern.service';
import { StrategyService } from '@app/shared/services/strategy.service';
import { BehaviorSubject } from 'rxjs';
import { CanvasService } from './canvas.service';
import { CanvasSharedData } from './models/canvas-shared-data';

@Injectable({
  providedIn: 'root'
})
export class CanvasSharedDataService
{

  private currentCanvas: Canvas = null;
  private currentCanvasSource = new BehaviorSubject<Canvas>(this.currentCanvas);
  currentCanvasObservable = this.currentCanvasSource.asObservable();

  // current (without base) = current pattern(-s) which is/are attached to the current canvas
  private currentPatterns: Pattern[] = [];
  private currentPatternsSource = new BehaviorSubject<Pattern[]>(this.currentPatterns);
  currentPatternsObservable = this.currentPatternsSource.asObservable();

  private currentStrategy: Strategy = null;
  private currentStrategySource = new BehaviorSubject<Strategy>(this.currentStrategy);
  currentStrategyObservable = this.currentStrategySource.asObservable();

  // includes the weights for each field in the canvas
  // currentBase = pattern/strategy for canvas
  private currentBasePattern: Pattern = null;
  private currentBasePatternSource = new BehaviorSubject<Pattern>(this.currentBasePattern);
  currentBasePatternObservable = this.currentBasePatternSource.asObservable();

  private currentBaseStrategy: Strategy = null;
  private currentBaseStrategySource = new BehaviorSubject<Strategy>(this.currentBaseStrategy);
  currentBaseStrategyObservable = this.currentBaseStrategySource.asObservable();

  private pattern: Pattern[] = [];
  private patternSource = new BehaviorSubject<Pattern[]>(this.pattern);
  patternObservable = this.patternSource.asObservable()

  private strategy: Strategy[] = [];
  private strategySource = new BehaviorSubject<Strategy[]>(this.strategy);
  strategyObservable = this.strategySource.asObservable()

  private patternStrategyWeights: CanvasSharedData = {currentPattern: this.currentBasePattern, currentStrategy: this.currentBaseStrategy, weightsBetweenPatternAndStrategy: null};
  private patternStrategyWeightsSource = new BehaviorSubject<CanvasSharedData>(this.patternStrategyWeights);
  currentPatternStrategyWeightsObservable = this.patternStrategyWeightsSource.asObservable();


  constructor
  (
    private canvasService: CanvasService,
    private patternService: PatternService,
    private strategyService: StrategyService,
    private strategyPatternService: StrategyPatternService)
  {

  }


  update_canvas(canvas: Canvas)
  {
    this.currentCanvas = canvas;
    this.currentCanvasSource.next(this.currentCanvas);
    this.patternService
        .getAllPattern()
        .subscribe( a =>
          this.patternSource.next(a)
        );
    this.strategyService
        .getAllStrategies()
        .subscribe( a =>
          this.strategySource.next(a)
        )
    if(this.currentCanvas.pattern_ids)
    {
      this.updateBasePattern(this.currentCanvas.pattern_ids[0])
      this.updateCurrentPattern(this.currentCanvas.pattern_ids);
    }
    if(this.currentCanvas.strategy_id)
    {
      this.updateBaseStrategy(this.currentCanvas.strategy_id);
      this.updateCurrentStrategy(this.currentCanvas.strategy_id);
    }
  }


  updateBasePattern(pattern: Pattern)
  {
    this.currentBasePattern = pattern;
    this.currentBasePatternSource.next(this.currentBasePattern);
    this.updatePatternStrategyWeights();
  }

  updateBaseStrategy(strategy: Strategy)
  {
      this.currentBaseStrategy = strategy;
      this.currentBaseStrategySource.next(this.currentBaseStrategy);
      this.updatePatternStrategyWeights();
  }

  updateCurrentPattern(currentPatterns: Pattern[])
  {
    this.currentPatterns = currentPatterns;
    this.currentPatternsSource.next(this.currentPatterns);
  }

  addOneToCurrentPattern(additionalPattern: Pattern)
  {
    if(this.currentPatterns.filter(a => a.id == additionalPattern.id).length < 1)
    {
      this.currentPatterns.push(additionalPattern);
      this.currentPatternsSource.next(this.currentPatterns);
    }
  }

  updateCurrentStrategy(currentStrategy: Strategy)
  {
    this.updateBaseStrategy(currentStrategy);
    this.currentStrategy = currentStrategy;
    this.currentStrategySource.next(this.currentStrategy);
  }

  
  private updatePatternStrategyWeights()
  {
    if(this.currentBasePattern && this.currentBaseStrategy)
    {
      this.strategyPatternService
          .getWeightBetweenStrategyAndPatternByStrategyId(this.currentBaseStrategy.id)
          .subscribe(
              result =>
              {
                let resultWeights: StrategyPattern[]  = result;
                let nextMessage: CanvasSharedData = {currentPattern: this.currentBasePattern, currentStrategy: this.currentBaseStrategy, weightsBetweenPatternAndStrategy: resultWeights};
                this.patternStrategyWeightsSource.next(nextMessage);
              }
          );
    }
    else
    {
      this.patternStrategyWeightsSource.next({currentPattern: this.currentBasePattern, currentStrategy: this.currentBaseStrategy, weightsBetweenPatternAndStrategy: null});
    }
  }

}