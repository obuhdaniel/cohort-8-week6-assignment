import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap, throwError } from 'rxjs';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  login(credentials: LoginCredentials): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!credentials.email || !credentials.password) {
          reject(new Error('Email and password are required.'));
          return;
        }

        console.log('Login credentials submitted:', credentials);
        resolve();
      }, 700);
    });
  }

  loginWithObservable(credentials: LoginCredentials): Observable<LoginCredentials> {
    if (!credentials.email || !credentials.password) {
      return throwError(() => new Error('Email and password are required.'));
    }

    return of(credentials).pipe(
      delay(700),
      map((submittedCredentials) => ({
        ...submittedCredentials,
        email: submittedCredentials.email.toUpperCase(),
        password: submittedCredentials.password.toUpperCase(),
      })),
      tap((uppercaseCredentials) => {
        console.log('Observable login credentials:', uppercaseCredentials);
      }),
    );
  }
}
