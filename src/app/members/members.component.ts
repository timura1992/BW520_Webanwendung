import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import {Booking} from "../shared/model/booking";
import {BookingService} from "../shared/model/booking.service";
import {AuthService} from "../shared/security/auth.service";
import {ShootingsService} from "../shared/model/shootings.service";
import {PicturesService} from "../shared/model/pictures.service";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  bookings$: any;
  shootings$: any;
  hasPictures: any;

  constructor(private router: Router, private bookingService: BookingService, private authService: AuthService,
              private shootingService: ShootingsService) {


    this.bookings$ = this.bookingService.findBookingByUserId(this.authService.getCurrentUserId());
    console.log(this.bookings$);

//    this.shootings$ = this.shootingService.findShootingsInfosPerBooking(this.bookings$.bookingUrl);
//    console.log(this.shootings$);

    this.hasPictures = this.bookingService.findIfBookingsAvaivable(this.authService.getCurrentUserId());
    console.log(this.hasPictures);


 //   this.pictureLink = this.picturesService.getDownloadLink();
 //   console.log(this.pictureLink);

  }

  ngOnInit() {
  }

}
