import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule} from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {routerConfig} from "./router.config";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BookingComponent } from './booking/booking.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "../environments/firebase.config";
import { ShootingsService } from './shared/model/shootings.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { BookingDetailComponent } from './booking-detail/booking-detail.component'
import {BookingService} from "./shared/model/booking.service";
import {AuthService} from "./shared/security/auth.service";
import {AuthGuard} from "./shared/security/auth.guard";
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {PicturesService} from "./shared/model/pictures.service";
import { GuestbookComponent } from './guestbook/guestbook.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    BookingComponent,
    ImprintComponent,
    LoginComponent,
    MembersComponent,
    RegisterComponent,
    BookingDetailComponent,
    BookingFormComponent,
    GuestbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHxEYiOAsb5I7NNUD_BjqgUtVdWjkMa24'
    }),
  ],
  providers: [
    ShootingsService,
    BookingService,
    PicturesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
