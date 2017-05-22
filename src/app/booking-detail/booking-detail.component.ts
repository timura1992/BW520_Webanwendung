import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Shootings} from "../shared/model/shootings";
import {ShootingsService} from "../shared/model/shootings.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BookingService} from "../shared/model/booking.service";
import {AuthInfo} from "../shared/security/auth-info";
import {AuthService} from "../shared/security/auth.service";


@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  shooting$: Observable<Shootings>;
  bookingUrl: string;

  constructor(private route: ActivatedRoute,
              private shootingsService: ShootingsService,
              private fb:FormBuilder,
              private bookingService: BookingService,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
    this.bookingUrl = this.route.snapshot.params['id'];
    console.log(this.bookingUrl);

    this.shooting$ = this.shootingsService.findShootingByUrl(this.bookingUrl);
    console.log(this.shooting$);
  }

  save(form){
    this.bookingService.createNewBooking(this.bookingUrl, form.value)
      .subscribe
      (
        () => {
          alert('Ihre Buchung war erfolgreich');
          this.router.navigateByUrl('/members');
        },
        err => alert('Fehler: ${err}')
      );
  }

}
