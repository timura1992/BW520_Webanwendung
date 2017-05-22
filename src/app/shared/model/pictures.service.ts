import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {AuthService} from "../security/auth.service";

@Injectable()
export class PicturesService {

  image: string;

  constructor(/*private af: AngularFire, private firebaseApp: any, private authService: AuthService*/) {

   // const storageRef = firebaseApp.storage().ref().child('user/' + this.authService.getCurrentUserId() + '/po/tath/timur.jpg');
   // storageRef.getDownloadURL().then(url => this.image = url);
  }

  //getDownloadLink(): string{
   // return this.image
  //}


}
