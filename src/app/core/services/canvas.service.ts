import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { GetAllCanvasesGQL, Canvas } from '@app/graphql/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(private canvasGQL: GetAllCanvasesGQL)
  {

  }

  getAllCanvases(): Observable<Array<Object>>
  {
    return this.canvasGQL.fetch().pipe(map(res => res.data.getAllCanvases));

  }
}
