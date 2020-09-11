import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Canvas, GetAllCanvasesGQL, GetCanvasGQL, GetCanvasesOfUserOfProjectGQL, GetCanvasOfUserGQL} from '@app/graphql/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(
      private getAllCanvasesGQL: GetAllCanvasesGQL,
      private getCanvasGQL:GetCanvasGQL,
      private getCanvasesOfUserOfProjectGQL: GetCanvasesOfUserOfProjectGQL,
      private getCanvasOfUserGQL: GetCanvasOfUserGQL)
  {

  }

  getCanvasesOfUserOfProject(project_id: string): Observable<Canvas[]>
  {
    return this.getCanvasesOfUserOfProjectGQL.fetch( {project_id: project_id} , null).pipe(map(res => res.data.getCanvasesOfUserOfProject as Canvas[]));
  }

  getAllCanvases(): Observable<Canvas[]>
  {
    return this.getAllCanvasesGQL.fetch(null, null).pipe(map(res => res.data.getAllCanvases as Canvas[]));
  }

  getCanvas(id: string): Observable<Canvas>
  {
    return this.getCanvasGQL.fetch( {id: id} , null).pipe(map(res => res.data.getCanvas as Canvas));
  }

  getCanvasOfUser(canvas_id: string): Observable<Canvas>
  {
    return this.getCanvasOfUserGQL.fetch({id: canvas_id}, null).pipe(map(res => res.data.getCanvasOfUser as Canvas));
  }

  // getAllProjectsOfUser(): Observable<Canvas[]>
  // {
  //   return this.getAllProjectsOfUserGQL.fetch(null, null).pipe(map(res => res.data.getAllProjectsOfUser as Project[]));
  // }
}



