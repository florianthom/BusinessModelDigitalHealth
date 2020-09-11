import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Project, GetAllProjectsGQL, GetProjectGQL, GetAllProjectsOfUserGQL} from '@app/graphql/generated/graphql';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private getAllProjectsGQL: GetAllProjectsGQL, private getProjectGQL: GetProjectGQL, private getAllProjectsOfUserGQL: GetAllProjectsOfUserGQL)
  {

  }


  getAllProjects(): Observable<Project[]>
  {
    // fetch:
    //  - = fetch is a apollo-client method
    //  - here is nothing related to prisma
    //  - fetch(variables?, networkPolicy)
    //  - variables: something for pagination or in general if you have a (static) Query (not Mutation) and want to send some variables along with it
    //  - networkPolicy: apollo-client has a cache; default=if any data more or less up to date is in cache it just skips the api-look-up
    //    - network-only=always send api-request
    //  - outputs an rxjs-observable
    //    
    // pipe:
    //  - = a rxjs function to combine multiple functional operator into a chain
    //    - e.g. several maps or filter -> map -> filter -> ...
    //  - these functional operators do also only return async observalbes, somehow they have to be combined if you want to
    //    apply multiple at one observable
    //  - functions can be chained with comma separation
    //  - returns observable
    //  - to get result -> we have to subscribe() (but i guess angular pipe works too -> | async -> but idk)
    //    - e.g. .subscribe(todos => this.todos = todos); -> https://medium.com/angular-in-depth/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794
    //
    // map:
    //  - = from RxJS and works on the RxJS Obervable
    //  - operates on Observables
    //  - applies a function to every item of the source observable and emits and observable
    //
    // subscribe:
    //  - returns value(-s) of an observable
    //  - you have to use this (i mean subscribe) or angular pipe (| async) to get the values
    //    - subscribe or | async is really debatable, but | async is very good https://medium.com/angular-in-depth/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794
    //  - "onPush" ???? does not work with subscribe
    //  - if you use subscribe you have to manually unsubscribe (e.g. in onDelete)
    return this.getAllProjectsGQL.fetch(null, {fetchPolicy: 'network-only'}).pipe(map(res => res.data.getAllProjects as Project[]));
  }

  getProject(id: string): Observable<Project>
  {
    return this.getProjectGQL.fetch( {id: id}, null).pipe(map( res => res.data.getProject as Project));
  }


  getAllProjectsOfUser(): Observable<Project[]>
  {
    return this.getAllProjectsOfUserGQL.fetch(null, null).pipe(map(res => res.data.getAllProjectsOfUser as Project[]));
  }


}

// getAllContainers(): Observable<Container[]> {
//   return this.getAll.fetch(null, {fetchPolicy: 'network-only'}).pipe(map(res => res.data.getAllContainers as Container[]
//   ));
// }
