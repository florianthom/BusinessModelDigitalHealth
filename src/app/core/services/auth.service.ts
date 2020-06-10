import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  
  // task of this class is to mange Token in localstorage and as attribute
  private header: HttpHeaders;

  constructor()
  {
    
  }

  setAuthorization(token: string): void {
    this.setTokenToLocalStorage(token);
    this.setHeader(token);
  }

  clearAuthorization(): void {
    this.removeTokenFromLocalStorage();
    this.deleteHeader();
  }

  getToken(): string {
    return this.hasToken() ? localStorage.getItem('token') : undefined;
  }

  hasToken(): boolean {
    const token = localStorage.getItem('token');
    return Boolean(token);
  }

  private setHeader(token: string): void {
    this.header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getHeader(): HttpHeaders {
    if (!this.header) {
      this.setHeader(localStorage.getItem('token'));
    }
    return this.header;
  }

  private deleteHeader(): void {
    this.header = null;
  }

  setTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  }

  removeTokenFromLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
