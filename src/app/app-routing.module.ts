import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { DiseasePredictionComponent } from './components/disease-prediction/disease-prediction.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PreviousAppointmentComponent } from './components/previous-appointment/previous-appointment.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'

  },
  {
    path: 'appointment',
    component: BookAppointmentComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path: 'userAppointments',
    component: PreviousAppointmentComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutUsComponent,
    pathMatch: 'full'

  },
  {
    path: 'disease',
    component: DiseasePredictionComponent,
    pathMatch: 'full'

  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'

  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]

  },
  {
    path: 'doctorDashboard',
    component: DoctorDashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
