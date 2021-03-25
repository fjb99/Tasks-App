import {Injectable} from '@angular/core';
import {CanActivate, CanLoad} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService) {
  }

  canActivate(): boolean {
    return this.auth.isLoggedIn();
  }

  canLoad(): boolean {
    return this.auth.isLoggedIn();
  }

}
