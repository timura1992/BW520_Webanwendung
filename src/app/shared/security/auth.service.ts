import { Injectable } from '@angular/core';
import {AngularFireAuth, FirebaseAuthState, AuthMethods, AuthProviders} from "angularfire2";
import {Router} from "@angular/router";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {AuthInfo} from "./auth-info";

@Injectable()
export class AuthService {


  error: any;

  static UNKNOWN_USER = new AuthInfo(null);
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  constructor(private auth: AngularFireAuth, private router:Router) {

  }

  loginEmail(email, password):Observable<FirebaseAuthState> {
    var cred: any = {email: email, password: password};
    return this.fromFirebaseAuthPromise(this.auth.login(cred,
      { provider: AuthProviders.Password, method: AuthMethods.Password
      }));
  }

  loginGoogle():Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      })
    )};

  loginFb():Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
      })
    )};


  signUp(email, password) {
    return this.fromFirebaseAuthPromise(this.auth.createUser({email, password}));
  }

  getCurrentUserId(): string{
    return this.auth.getAuth().uid;
  }

  fromFirebaseAuthPromise(promise):Observable<any> {
    const subject = new Subject<any>();
    promise
      .then(res => {
          const authInfo = new AuthInfo(this.auth.getAuth().uid);
          this.authInfo$.next(authInfo);
          subject.next(res);
          subject.complete();
        },
        err => {
          this.authInfo$.error(err);
          subject.error(err);
          subject.complete();
        });
    return subject.asObservable();
  }


  logout() {
    this.auth.logout();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigate(['/home']);
  }

}
