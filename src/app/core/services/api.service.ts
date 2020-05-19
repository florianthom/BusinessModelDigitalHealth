import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable()
export class ApiService {
  // where does httpClient come from? we didnt imported HttpClient to angular!?
  // we imported HttpClient into Angular at shared-module, so there are 2 possible ways
  //    1. we can use it because it is provider by the root-provider (specified in HttpClient itself)
  //    2. we can use it because shared module is imported to app module and because app is the most-top
  //        module, we can use it here (idk, whether 1 or 2, tend to 1)
  constructor( private http: HttpClient) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }


  // params useful for limiting numbers or something like that
  get(path: string/* , params: HttpParams = new HttpParams() */): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`)
      //.pipe(catchError(this.formatErrors));
  }





  // eventuell httpOptions mitschicken
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}