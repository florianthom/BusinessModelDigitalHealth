import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthPayload, LoginUserGQL, RegisterUserGQL, User } from '@app/graphql/generated/graphql';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService
{
  
  private header: HttpHeaders;

  private user: User = null;
  private userSource = new BehaviorSubject<User>(this.user);
  userObservable = this.userSource.asObservable();

  constructor
  (
    private apollo: Apollo,
    private loginUserGQL: LoginUserGQL,
    private registerUserGQL: RegisterUserGQL
  )
  {

  }

  loginUser(email: string, password: string): Observable<AuthPayload>
  {
    return this.loginUserGQL
      .fetch({ email: email, password: password })
      .pipe(
        map(a => {
          let data = a.data.login as AuthPayload
          if(data.user && data.token)
          {
            this.updateLoggedInUser(data.user, data.token);
          }
          return data;
        })
      );
  }

  updateLoggedInUser(user: User, token: string): void
  {
    this.userSource.next(user);
    this.setAuthorization(token);
  }

  registerUser(firstname: string, lastname: string, email: string, password: string): Observable<User>
  {
    return this.registerUserGQL
        .mutate({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
          })
        .pipe(map(a => a.data.registrate as User))
  }

  logoutUser(): void
  {
    this.userSource.next(null);
    // this.clearAuthorization();
    // this.apollo.getClient().clearStore();
    // this.apollo.getClient().cache.reset();
  }

  setAuthorization(token: string): void
  {
    this.setTokenToLocalStorage(token);
    this.setHeader(token);
  }

  clearAuthorization(): void
  {
    this.removeTokenFromLocalStorage();
    this.deleteHeader();
  }

  isUserLoggedIn(): Boolean
  {
    const token = localStorage.getItem('token');
    return Boolean(token);
  }

  private setHeader(token: string): void
  {
    this.header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


  private deleteHeader(): void
  {
    this.header = null;
  }

  setTokenToLocalStorage(token: string): void
  {
    localStorage.setItem('token', token);
  }

  removeTokenFromLocalStorage(): void
  {
    localStorage.removeItem('token');
  }
}