import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Project, GetAllProjectsGQL} from '@app/graphql/generated/graphql';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // localhost:5000/graphql
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private getAllProjectsGQL: GetAllProjectsGQL)
  {

  }


  getAllProjects(): Observable<Project[]>
  {
    return this.getAllProjectsGQL.fetch(null, {fetchPolicy: 'network-only'}).pipe(map(res => res.data.getAllProjects as Project[]));

  }
}

// getAllContainers(): Observable<Container[]> {
//   return this.getAll.fetch(null, {fetchPolicy: 'network-only'}).pipe(map(res => res.data.getAllContainers as Container[]
//   ));
// }
