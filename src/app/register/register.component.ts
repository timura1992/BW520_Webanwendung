import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import {  AuthService} from "../shared/security/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  state: string = '';
  error: any;
  form: FormGroup;

  constructor (private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirm: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  isPasswordMatch(){
    const val = this.form.value;
    return val && val.password && val.password == val.confirm;
  }

  signUp() {
    const val = this.form.value;
    this.authService.signUp(val.email, val.password)
      .subscribe(
        () => {
          alert('User wurde erstellt !');
          this.router.navigateByUrl('/login');
        },
        err => alert(err)
      );
  }



}
