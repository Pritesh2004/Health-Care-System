import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { register } from 'swiper/element/bundle';

import { AuthInterceptor } from './services/auth.interceptor';
import { LoginService } from './services/login.service';
import { SignupComponent } from './components/signup/signup.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardUserComponent } from './flip-card/flip-card-user';
import { FlipCardDoctorComponent } from './flip-card/flip-card-doctor';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { DiseasePredictionComponent } from './components/disease-prediction/disease-prediction.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatTableModule} from '@angular/material/table';

import { PreviousAppointmentComponent } from './components/previous-appointment/previous-appointment.component';
import { DoctorNavbarComponent } from './components/doctor-navbar/doctor-navbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


register();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    
    
    DoctorDashboardComponent,
    FlipCardComponent,
    FlipCardUserComponent,
    FlipCardDoctorComponent,
    BookAppointmentComponent,
    ContactUsComponent,
    DiseasePredictionComponent,
    AboutUsComponent,
   
    PreviousAppointmentComponent,
        DoctorNavbarComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [LoginService,AuthGuard,DashboardComponent,DoctorDashboardComponent, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
