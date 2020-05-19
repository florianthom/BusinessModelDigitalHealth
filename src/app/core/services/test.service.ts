import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Test } from '../../shared/models/test.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  // gets injected through this module-level-provider
  constructor(private apiService: ApiService) { }

  getExampleData(): Observable<Test> {
    return this.apiService.get("/tests")
      //.pipe(map(data => data.data));
  }
}
