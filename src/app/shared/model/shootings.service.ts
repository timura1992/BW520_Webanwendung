import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Shootings} from "./shootings";
import {AngularFire} from "angularfire2";


@Injectable()
export class ShootingsService {

  constructor(private af: AngularFire) { }

  findAllBookingOptions(): Observable<Shootings[]>{
    return this.af.database.list('shootings');
  }

  findShootingByUrl(shootingUrl: string):Observable<Shootings>{
    return this.af.database.list('shootings', {
      query: {
        orderByChild: 'bookingUrl',
        equalTo: shootingUrl,
      }
    })
      .map(results => results[0]);
  }


//  findShootingsInfosPerBooking(shootingId: string):Observable<Shootings[]>{
//    return this.af.database.list('shootings', {
//      query: {
//        orderByChild: 'id',
//        equalTo: shootingId,
//      }
//    })
//  }

}
