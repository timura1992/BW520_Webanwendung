import {Injectable, Inject} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Booking} from "./booking";
import {firebaseConfig} from "../../../environments/firebase.config";
import {Http} from "@angular/http";

@Injectable()
export class BookingService {

  sdkDB: any;

  constructor(private db:AngularFireDatabase, private http:Http,  @Inject(FirebaseRef) fb) {
    this.sdkDB = fb.database().ref();
  }



  createNewBooking(bookingUrl: string, booking:any): Observable<any>{

    const bookingToSave = Object.assign({}, booking, {bookingUrl});
    const newBookingKey = this.sdkDB.child('bookings').push().key;
    const newDatesKey = this.sdkDB.child('dates').push().key;

    let dataToSave = {};
    dataToSave["bookings/"+ newBookingKey ] = bookingToSave;

    return this.firebaseUpdate(dataToSave)
  }

  findBookingByUserId(userId: string):Observable<Booking[]>{
    return this.db.list('bookings', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    })
  }

  findIfBookingsAvaivable(userId: string):Observable<Booking>{
    return this.db.list('bookings', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    })
      .map(results => results[0])
      .do(console.log)
  }

  findBookingByUrl(url:string):Observable<Booking> {
    return this.db.list('bookings', {
      query: {
        orderByChild: 'userId',
        equalTo: url
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => Booking.fromJson(results[0]))
      .do(console.log);
  }

  saveBooking(bookingKey:string, booking): Observable<any> {

    const bookingToSave = Object.assign({}, booking);
    delete(bookingToSave.$key);

    let dataToSave = {};
    dataToSave[`bookings/${bookingKey}`] = bookingToSave;


    return this.firebaseUpdate(dataToSave);

  }

  firebaseUpdate(dataToSave){
    const subject = new Subject();

    this.sdkDB.update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete();
        },
        err => {
          subject.next(err);
          subject.complete();
        }
      );
    return subject.asObservable();
  }


}
