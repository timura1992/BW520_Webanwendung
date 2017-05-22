import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat: number = 49.4730952;
  lng: number = 8.4236009;
  zoom: number = 16;

  constructor() { }

  ngOnInit() {
  }

}
