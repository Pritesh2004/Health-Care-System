import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoginDoctorService } from 'src/app/services/login-doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


export interface doctor_appointment {
  
  
serialNo:number;
  patient_firstName: string;
  patient_lastName: string;
  email: string;
  patient_gender: string;
  appointment_date: string;
  appointment_time: string;
  booking_time: string;
  reason: string;
  id: number;
  appointment_rejected:boolean;
  appointment_status:boolean;
}



@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})

export class DoctorDashboardComponent {

 
  
  public loggedIn = false
  id: any;
  location: any;
 
  

  constructor(private service: LoginDoctorService, private userService: UserService) {

  }
  

  ngOnInit(): void {

    // Refresh the page by navigating to the current URL
    // this.location.replaceState(this.location.path('/doctorDashboard'));
    this.getDoctor();
    this.getAppointments();

    this.service.refreshNeeded.subscribe(() => {
      this.getAppointments();
      
      


    });

    this.loggedIn = this.service.isDoctorLoggedIn()
  }
  public appointment_data: doctor_appointment[] = [];
  displayedColumns: string[] = [ 'serialNo','patient_firstName', 'patient_lastName', 'patient_gender', 'appointment_date', 'appointment_time', 'reason', 'appointment_status','appointment_rejected'];
  dataSource = new MatTableDataSource<doctor_appointment>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logoutUser() {
    this.service.loggedOut()
    location.reload()
  }

  public doctor_details: any

  getDoctor(){
    const email = sessionStorage.getItem('email')
    console.log(email)
    this.service.getDoctor(email).subscribe(
      (data: any) => {

        this.doctor_details=data
        console.log(data)
        console.log(this.doctor_details.email)
       
      },
      ( error: any) => {
        console.log(error)

      }

    )
  }

 

  getAppointments(){

    const doctorEmail = sessionStorage.getItem('email')
     
    this.service.getAppointmentByDoctorEmail(doctorEmail).subscribe(
      (appointment: doctor_appointment[]) => {
        this.appointment_data = appointment;
        this.dataSource = new MatTableDataSource<doctor_appointment>(this.appointment_data);
       
        console.log(this.appointment_data)

    
      
      },
      error => {
        console.log(error)
      }
    )
  }

 
  approveAppointment(appointment:doctor_appointment){

    console.log(appointment.id)

    this.userService.updateAppointmentStatus(appointment.id).subscribe(
      ()=>{
        console.log("approved")
        Swal.fire({
          title: 'Appointment Approved',
          text: '',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: '<a href="/doctorDashboard">Ok</a>'
        })
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  rejectAppointment(appointment:doctor_appointment){

    console.log(appointment.id)

    this.userService.rejectAppointmentStatus(appointment.id).subscribe(
      ()=>{
        console.log("rejected")
        Swal.fire({
          title: 'Appointment Rejected',
          text: '',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: '<a href="/doctorDashboard">Ok</a>'
        })
      },
      (error)=>{
        console.log(error)
      }
    )

  }


}
