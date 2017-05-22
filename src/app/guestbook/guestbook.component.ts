import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  items: FirebaseListObservable<any>;
  form: FormGroup;


  constructor(public af: AngularFire, private fb: FormBuilder) {
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
    this.form = this.fb.group({
      msgVal: ['',Validators.required],
      guestName: ['',Validators.required],
    });
  }

  chatSend() {
    const val = this.form.value;
    this.items.push({ message: val.guestName, name: val.msgVal});
    this.form.reset();
  }



  ngOnInit() {
  }

}
