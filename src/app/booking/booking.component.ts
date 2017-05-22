import { Component, OnInit } from '@angular/core';
import { Shootings } from "../shared/model/shootings";
import { ShootingsService } from '../shared/model/shootings.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  findAllShootings: Shootings[];
  searchAllShootings: Shootings[];

  constructor(private shootingsService: ShootingsService) { }

  ngOnInit() {
    this.shootingsService.findAllBookingOptions()
      .do(console.log)
      .subscribe(
        shootings => this.findAllShootings = this.searchAllShootings = shootings
      );
  }

  search(search:string){
    this.searchAllShootings = this.findAllShootings.filter(shootings => shootings.titel.includes(search));
  }
}
