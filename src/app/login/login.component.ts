import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../shared/security/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService,
              private router:Router) {

    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });

  }

  loginEmail() {
    const formValue = this.form.value;
    this.authService.loginEmail(formValue.email, formValue.password)
      .subscribe(
        () => this.router.navigate(['/home']),
        alert
      );
  }

  loginGoogle(){
    this.authService.loginGoogle()
      .subscribe(
        () => this.router.navigate(['/home']),
        alert
      )
  }

  loginFb(){
    this.authService.loginFb()
      .subscribe(
        () => this.router.navigate(['/home'])
      )
  }

  ngOnInit() {
  }

}
