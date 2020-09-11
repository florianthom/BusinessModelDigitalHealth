import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import {
  StrategyPattern,
  Pattern,
  Strategy,
  GetWeightBetweenStrategyAndPatternByPatternIdGQL,
  GetWeightBetweenStrategyAndPatternByStrategyIdGQL,
  GetWeightBetweenStrategyAndPatternByStrategyIdAndPatternIdGQL
} from '@app/graphql/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class StrategyPatternService
{

  constructor
  (
    private getWeightBetweenStrategyAndPatternByPatternIdGQL: GetWeightBetweenStrategyAndPatternByPatternIdGQL,
    private getWeightBetweenStrategyAndPatternByStrategyIdGQL: GetWeightBetweenStrategyAndPatternByStrategyIdGQL,
    private getWeightBetweenStrategyAndPatternByStrategyIdAndPatternIdGQL: GetWeightBetweenStrategyAndPatternByStrategyIdAndPatternIdGQL
  )
  {

  }


  getWeightBetweenStrategyAndPatternByPatternId(pattern_id: string): Observable<StrategyPattern[]>
  {
    return this.getWeightBetweenStrategyAndPatternByPatternIdGQL.fetch( {pattern_id: pattern_id} , null).pipe(map(res => res.data.getWeightBetweenStrategyAndPatternByPatternId as StrategyPattern[]));
  }

  getWeightBetweenStrategyAndPatternByStrategyId(strategy_id: string): Observable<StrategyPattern[]>
  {
    return this.getWeightBetweenStrategyAndPatternByStrategyIdGQL.fetch( {strategy_id: strategy_id} , null).pipe(map(res => res.data.getWeightBetweenStrategyAndPatternByStrategyId as StrategyPattern[]));
  }

  getWeightBetweenStrategyAndPatternByStrategyIdAndPatternId(pattern_id: string, strategy_id: string): Observable<StrategyPattern>
  {
    return this.getWeightBetweenStrategyAndPatternByStrategyIdAndPatternIdGQL.fetch( {pattern_id: pattern_id, strategy_id: strategy_id} , null).pipe(map(res => res.data.getWeightBetweenStrategyAndPatternByStrategyIdAndPatternId as StrategyPattern));
  }
  
}