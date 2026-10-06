import { Injectable } from '@angular/core';

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
}
