import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/security/auth.service";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})


export class BookingFormComponent implements OnInit {

  form:FormGroup;
  pickerValues = {
    selectYears: 10, // Creates a dropdown of 15 years to control year
    selectMonths: true,
    monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', +
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    weekdaysLetter: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekdaysFull: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    firstDay: 1,
    min: 1,
    today: '',
    clear: 'Abbrechen',
    close: 'Eingeben',
  };

  @Input()
  initialValue:any;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      date: ['',Validators.required],
      adressCity:['',Validators.required],
      adressPostcode:['',Validators.required],
      adressStreet:['',Validators.required],
      phoneNumber:['',Validators.required],
      printedBook:[''],
      printedPictures:[''],
      offLocation:[''],
      makeUpWanted:[''],
      additionalPictures:[''],
      userId: [this.authService.getCurrentUserId()]
    })

  }

  ngOnInit() {
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

}
