import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Pattern, GetAllPatternGQL, GetPatternGQL} from '@app/graphql/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class PatternService {

  constructor(private getAllPatternGQL: GetAllPatternGQL, private getPatternGQL: GetPatternGQL)
  {

  }

  getAllPattern(): Observable<Pattern[]>
  {
    return this.getAllPatternGQL.fetch( null, null).pipe(map(res => res.data.getAllPattern as Pattern[]));
  }

  getPattern(id: string): Observable<Pattern>
  {
    return this.getPatternGQL.fetch( {id: id} , null).pipe(map(res => res.data.getPattern as Pattern));
  }

}
