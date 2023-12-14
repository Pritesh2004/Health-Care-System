import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  bookAppointment(patient:any){

    return this.http.post('http://localhost:9898/appointment/',patient);
  
  
  }
}
