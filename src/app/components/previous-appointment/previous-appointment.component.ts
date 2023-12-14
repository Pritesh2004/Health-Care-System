import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

export interface patient_appointment {


  serialNo: number;
  patient_firstName: string;
  patient_lastName: string;
  dr_name: string;
  dr_speciality: string;
  doctorEmail: string;
  email: string;
  patient_gender: string;
  appointment_date: string;
  appointment_time: string;
  booking_time: string;
  reason: string;
  appointment_id: number;
  appointment_status: boolean;
  appointment_rejected: boolean;
}

@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.css']
})
export class PreviousAppointmentComponent implements OnInit {
  tempStatus!: boolean;
  rejectStatus!: boolean;


  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getAppointments();
  }




  public appointment_data: patient_appointment[] = [];

  displayedColumns: string[] = ['serialNo', 'dr_name', 'dr_speciality', 'doctorEmail', 'appointment_date', 'appointment_time', 'booking_time', 'reason', 'appointment_status'];
  dataSource = new MatTableDataSource<patient_appointment>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getAppointments() {


    const patientEmail = localStorage.getItem('email')

    this.service.getAppointmentByPatientEmail(patientEmail).subscribe(
      (appointment: patient_appointment[]) => {
        this.appointment_data = appointment;
        this.dataSource = new MatTableDataSource<patient_appointment>(this.appointment_data);

        console.log(this.appointment_data)
       
        

      

      },
      error => {
        console.log(error)
      }
    )
  }

}
