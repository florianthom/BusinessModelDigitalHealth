import { Injectable, OnDestroy } from '@angular/core';
import { AuthPayload, LoginUserGQL, RegisterUserGQL, User } from '@app/graphql/generated/graphql';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { AuthorizationService}  from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGqlService implements OnDestroy {
  private destroy$ = new Subject();

  constructor(private apollo: Apollo, private authService: AuthorizationService, private login: LoginUserGQL, private register: RegisterUserGQL)
  {
    
  }

  ngOnDestroy(): void
  {
    this.destroy$.next();
  }

  loginUser(email: string, password: string): Observable<AuthPayload>
  {
    // this.login.fetch: the keys have to match the required keys
    return this.login.fetch({
      email: email,
      password: password
    }).pipe(map(res => res.data.login as AuthPayload));
  }

  registerUser(firstname: string, lastname: string, email: string, password: string): void
  {
    this.register.mutate({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
      }).pipe(takeUntil(this.destroy$)).subscribe();
  }

  logoutUser(): void
  {
    this.authService.clearAuthorization();
    this.apollo.getClient().clearStore();
    this.apollo.getClient().cache.reset();
    console.log('Cache cleared');
  }
}
