import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;


@Injectable({providedIn: 'root'})
export class AuthService {

  user?: User;

  isLoggedIn = () => !!this.user;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  }

  async login(email: string, password: string): Promise<void | string> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('tasks');
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  logout(): void {
    this.afAuth.signOut();
    this.router.navigateByUrl('/auth');
    this.user = undefined;
    // location.reload();
  }


}
