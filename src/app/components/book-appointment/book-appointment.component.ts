import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Doctor } from 'src/app/services/doctor.model';
import { LoginDoctorService } from 'src/app/services/login-doctor.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
  providers: [DatePipe]
})
export class BookAppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private doctorService: LoginDoctorService) {

  }

  public doctorDetails = {
    name: '',
    email: '',
  }

  doctors: Doctor[] = [];

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  public patient = {
    booking_time: '',
    patient_firstName: '',
    patient_lastName: '',
    doctorEmail: '',
    patient_gender: '',
    dr_speciality: '',
    email: '',
    dr_name: '',
    appointment_date: '',
    appointment_time: '',
    reason: '',
   


  };

  onSubmit(form: any) {

    // Assuming you want to find a doctor in the array based on the patient's dr_name
    const matchingDoctor = this.doctors.find(doctor => doctor.name === this.patient.dr_name);
    if (matchingDoctor) {
      this.patient.doctorEmail = matchingDoctor.email;
      this.patient.dr_speciality = matchingDoctor.speciality;
      
    } 
    const emailFromLocalStorage = localStorage.getItem('email');
    if (emailFromLocalStorage !== null) {
      this.patient.email = emailFromLocalStorage;
    }
    
    const fnameFromLocalStorage = localStorage.getItem('firstName');
    if (fnameFromLocalStorage !== null) {
      this.patient.patient_firstName = fnameFromLocalStorage;
    }
    
    const lnameFromLocalStorage = localStorage.getItem('lastName');
    if (lnameFromLocalStorage !== null) {
      this.patient.patient_lastName = lnameFromLocalStorage;
    }
    
    const genderFromLocalStorage = localStorage.getItem('gender');
    if (genderFromLocalStorage !== null) {
      this.patient.patient_gender = genderFromLocalStorage;
    }
    
    


    if (this.patient.dr_name == '' || this.patient.dr_name == null) {
      alert("Dr name is required")
    }
    else {

      console.log(this.patient.dr_name)
     

      this.appointmentService.bookAppointment(this.patient).subscribe(

        (data) => {
          console.log("Email" + this.patient.doctorEmail)

          console.log(data);
          Swal.fire({
            title: 'Your request is in process!',
            text: 'Wait for doctor approval and Check your email for more details.',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<a href="/dashboard">Ok</a>'
          })
          //  window.location.href="/dashboard"
        },
        (error) => {
          console.log(error)
          Swal.fire({
            title: 'The time slots are not available',
            text: 'Please choose different time or date',
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: '<a href="/appointment">Ok</a>'
          })

        }

      );
    }

  }

}
