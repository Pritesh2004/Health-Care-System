import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginDoctor } from '../components/login/login.component';
import { Doctor } from './doctor.model';
import { doctor_appointment } from '../components/doctor-dashboard/doctor-dashboard.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class LoginDoctorService {
  http: any;

  constructor(private httpClient: HttpClient) { }

  login(login: LoginDoctor){
    return this.httpClient.post<any>(
      "http://localhost:9696/doctor/login",login
    );
    }

    getDoctor(email: any) {
      {
        return this.httpClient.get('http://localhost:9696/doctor/' + email);
      }
    }

    getAllDoctors(): Observable<Doctor[]> {
      return this.httpClient.get<Doctor[]>("http://localhost:9696/doctor/getAll");
    }

    private refresh = new Subject<void>();
    get refreshNeeded() {
      return this.refresh;
    }

    getAppointmentByDoctorEmail(doctorEmail:any): Observable<doctor_appointment[]> {
      return this.httpClient.get<doctor_appointment[]>("http://localhost:9898/appointment/get/"+doctorEmail);
    }

    isDoctorLoggedIn(){
      let email=sessionStorage.getItem('email')
      let password=sessionStorage.getItem('password')
      if((email==undefined && password==undefined)||(email=='' && password=='')||(email==null && password==null)){
        return false
      }return true
    }

    loggedOut(){
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('password')
      return true
    }
}
