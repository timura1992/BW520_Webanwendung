import {Route} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BookingComponent} from './booking/booking.component';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import {RegisterComponent} from './register/register.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ImprintComponent} from './imprint/imprint.component';
import {BookingDetailComponent} from './booking-detail/booking-detail.component';
import {AuthGuard} from "./shared/security/auth.guard";
import {GuestbookComponent} from "./guestbook/guestbook.component";

export const routerConfig : Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'booking',
    children: [
      {
        path: ':id',
        component:BookingDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: BookingComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  { path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'guestbook',
    component: GuestbookComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]
