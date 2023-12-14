import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patient_appointment } from '../components/previous-appointment/previous-appointment.component';
import { doctor_appointment } from '../components/doctor-dashboard/doctor-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // baseUrl='http://localhost:9595/getusers'

  constructor(private http: HttpClient) { }

  getUser(email: any) {
    {

      return this.http.get('http://localhost:8181/patient/' + email);
    }
  }

  addUser(user: any) {

    return this.http.post('http://localhost:8181/patient/', user);

  }

  postQuery(query: any) {

    return this.http.post('http://localhost:9595/user/query', query);


  }
  getAppointmentByPatientEmail(patientEmail: any): Observable<patient_appointment[]> {
    return this.http.get<patient_appointment[]>("http://localhost:9898/appointment/" + patientEmail);
  }

  updateAppointmentStatus(id: any): Observable<doctor_appointment[]> {
    return this.http.put<doctor_appointment[]>("http://localhost:9898/appointment/update-status/"+id ,id);
  }

  rejectAppointmentStatus(id: any): Observable<doctor_appointment[]> {
    return this.http.put<doctor_appointment[]>("http://localhost:9898/appointment/reject-appointment/"+id , id);
  }

}
