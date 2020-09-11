import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Strategy, GetAllStrategiesGQL, GetStrategyGQL} from '@app/graphql/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class StrategyService
{

  constructor(private getAllStrategiesGQL: GetAllStrategiesGQL, private getStrategyGQL: GetStrategyGQL)
  {

  }

  getAllStrategies(): Observable<Strategy[]>
  {
    return this.getAllStrategiesGQL.fetch( null, null).pipe(map(res => res.data.getAllStrategies as Strategy[]));
  }

  getPattern(id: string): Observable<Strategy>
  {
    return this.getStrategyGQL.fetch( {id: id} , null).pipe(map(res => res.data.getStrategy as Strategy));
  }

}
