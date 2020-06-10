import { TestBed } from '@angular/core/testing';

import { UserGqlService } from './user-gql.service';

describe('UserGqlService', () => {
  let service: UserGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
