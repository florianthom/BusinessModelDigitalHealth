import { Injectable } from '@angular/core';
import { Pattern, Strategy, StrategyPattern } from '@app/graphql/generated/graphql';
import { StrategyPatternService } from '@app/shared/services/strategy-pattern.service';
import { BehaviorSubject } from 'rxjs';
import { CanvasSharedData } from './models/canvas-shared-data';

@Injectable({
  providedIn: 'root'
})
export class CanvasSharedDataService
{

  // includes the weights for each field in the canvas
  private currentPattern: Pattern = null;
  private currentStrategy: Strategy = null;

  private initialMessage: CanvasSharedData = {currentPattern: this.currentPattern, currentStrategy: this.currentStrategy, weightsBetweenPatternAndStrategy: null};
  private messageSource = new BehaviorSubject<CanvasSharedData>(this.initialMessage);
  currentMessage = this.messageSource.asObservable();


  constructor(private strategyPatternService: StrategyPatternService)
  {

  }

  changeMessage_changePattern(pattern: Pattern)
  {
    if(pattern)
    {
      this.currentPattern = pattern;
      if(this.currentPattern && this.currentStrategy)
      {
        this.strategyPatternService
            // i need to call getWeightBetweenStrategyAndPatternByStrategyId
            // reason: in general i need distances between 1 strategy to all patterns for distance-matrix
            //  -> now i change pattern
            //  -> but actually this is unrelevant because i still want to know the distance from baseStrategy to all patterns
            //  -> actually this function (..._changePattern) is kind of blown, since in the distance-matrix we need only
            //      the event "changed pattern" and not to fetch the pattern-strategy-distances all the time
            //        -> we could do that simply in the distance-matrix-component it self i think
            // .getWeightBetweenStrategyAndPatternByStrategyId(pattern.id)
            .getWeightBetweenStrategyAndPatternByStrategyId(this.currentStrategy.id)
            .subscribe(
                result =>
                  {
                    let resultWeights: StrategyPattern[]  = result;
                    let nextMessage: CanvasSharedData = {currentPattern: this.currentPattern, currentStrategy: this.currentStrategy, weightsBetweenPatternAndStrategy: resultWeights};
                    this.messageSource.next(nextMessage);
                  },
                error =>
                {
                  console.log("error")
                }
            );
      }
    }
  }

  changeMessage_changeStrategy(strategy: Strategy)
  {
    if(strategy)
    {
      console.log("change pattern");
      this.currentStrategy = strategy;
      
      if(this.currentPattern && this.currentStrategy)
      {
        this.strategyPatternService
            // i need to call getWeightBetweenStrategyAndPatternByStrategyId
            // reason: in general i need distances between 1 strategy to all patterns for distance-matrix
            //  -> now i change strategy
            .getWeightBetweenStrategyAndPatternByStrategyId(strategy.id)
            .subscribe(
                result =>
                {
                  let resultWeights: StrategyPattern[]  = result;
                  let nextMessage: CanvasSharedData = {currentPattern: this.currentPattern, currentStrategy: this.currentStrategy, weightsBetweenPatternAndStrategy: resultWeights};
                  this.messageSource.next(nextMessage);
                },
                error =>
                {
                  console.log("error")
                }
            );
      }
    }
  }

}
